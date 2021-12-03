import React from 'react';
import '../Assets/css/Login.css';
import axios from 'axios';
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
      if(response.data.access === true){
        console.log(response);
        localStorage.setItem("access-token",response.data.token);
        localStorage.setItem("roId",response.data.roId);
        localStorage.setItem("id",response.data.id);
        this.props.navigate('home');
      }else{

        this.setState({
          error: true,
          errorMsg: response.data.message
        })
      }

    }).catch(error=>{
      console.log(error)
      this.setState({
        error: true,
        errorMsg: "Error connecting to the Service"
      })

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
              <input className="loginplace" placeholder="Name" type="text" name="uName" onChange={this.handlerChange}/>
              <br/>
              <input className="loginplace" placeholder="Password" type="password" name="uPwdHash" onChange={this.handlerChange}/>
              <br/>
              <button className="loginbtn" onClick={this.handlerButton}>Login</button> 
            </div>

            {this.state.error == true &&
              <div class="alert alert-danger" role="alert">
                    {this.state.errorMsg}
              </div>}

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