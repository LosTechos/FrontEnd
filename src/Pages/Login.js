import React, {useState} from 'react';
import '../Assets/css/Login.css';
import axios from 'axios';
import { Email } from '@material-ui/icons';
import { useNavigate } from "react-router-dom"

class Login extends React.Component{

  
  state={
    form:{
      "uName":"",
      "uPwdHash":""
    },
    error:false,
    errorMsg:""
  }

  handlerSubmit(e){
    e.preventDefault();
  }

  handlerChange = async e =>{
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
    //console.log(this.state.form);
  }

  handlerButton=()=>{
    let url = "https://los-techos.herokuapp.com/api/login";
    axios.post(url,this.state.form)
    .then(response=>{
      console.log(response);
      localStorage.setItem("access-token",response.data.token);
      localStorage.setItem("roId",response.data.roId);
      this.props.navigate('home');

    })
  }


  render (){

    return(
      <React.Fragment>
        <div className="Login">
    <header className="Login-header">
      <form onSubmit={this.handlerSubmit}>
          <div className="container">
            <h1>Welcome!</h1>
            <div className="form-group">
              <input placeholder="Name" type="text" name="uName" onChange={this.handlerChange}/>
              <br/>
              <input placeholder="Password" type="password" name="uPwdHash" onChange={this.handlerChange}/>
              <br/>
              <button className="loginbtn" onClick={this.handlerButton}>Login</button> 
            </div>
          </div>
      </form>
    </header>
    </div>
      </React.Fragment>
    );
  }
}

function WithNavigate(props){
  let navigate = useNavigate();
  return<Login{...props} navigate={navigate}/>
}

export default WithNavigate;