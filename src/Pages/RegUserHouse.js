import '../Assets/css/RegUserHouse.css'
import axios from "axios";
import { render } from '@testing-library/react';
import { Component } from 'react';

const url="https://los-techos.herokuapp.com/api/"


class RegUserHouse extends Component{



state={
  data:[],
  modalInsert: false,
  form:{
    uName:"",
    uPwdHash:"",
    uEmail:"",
    uPhone:"",
    roId:"",
    hNumber:"",
    hAddress:"",
    hDebt:"",
    hMonthlyMount:""

  }
}

modalInsert=()=>{
  this.State({modalInsert: !this.state.modalInsert});
}

peticionPost=async()=>{
await  axios.post(url+"userRegister",this.state.form).then(response=>{
    this.modalInsert();
  }).catch(error=>{
    console.log(error.message);
  })
}
peticionPostH=async()=>{
  await  axios.post(url+"houseRegister",this.state.form).then(response=>{
      this.modalInsert();
    }).catch(error=>{
      console.log(error.message);
    })
  }


handleChange= async e=>{
e.persist();
await this.setState({
  form:{
    ...this.state.form,
    [e.target.name]: e.target.value
  }
});
console.log(this.state.form);
}

render(){
  const{form}=this.state;
    return (
        <div className="Register">
          <header className="Register-header">
            <div className="containerMain">
              <div className="user-form">
                <h1>Create new user</h1>
                <h3>Enter your personal information</h3>
                <input name="uName" placeholder="Full Name" type="text" className="form-control" onChange={this.handleChange} value={form.uName}/>
               
                <input name="uPwdHash" placeholder="Password" type="password" className="form-control" onChange={this.handleChange} value={form.uPwdHash}/>
               
                <input name="uEmail" placeholder="Mail" type="text" className="form-control" onChange={this.handleChange} value={form.uEmail}/>
               
                <input name="uPhone" placeholder="Phone" type="text" className="form-control" onChange={this.handleChange} value={form.uPhone}/>
               
                <input name="roId" placeholder="Role" type="text" className="form-control" onChange={this.handleChange} value={form.roId}/>
                
                <button className="Submitbtn" onClick={()=>this.peticionPost()}>Submit User</button>
              </div>
              <div className="house-form">
               
                <h3>Enter your address information</h3>
                <input name="hNumber" placeholder="Exterior Number" type="text" className="form-control" onChange={this.handleChange} value={form.hNumber}/>
                
                <input name="hAddress" placeholder="Street" type="text" className="form-control" onChange={this.handleChange} value={form.hAddress}/>
               
                <input name="hDebt" placeholder="Debt" type="text" className="form-control" onChange={this.handleChange} value={form.hDebt}/>
             
                <input name="hMonthlyMount" placeholder="Monthly Amount" type="text" className="form-control" onChange={this.handleChange} value={form.hMonthlyMount}/>
               
                <button className="Submitbtn" onClick={()=>this.peticionPostH()}>Submit House</button>
              </div>
            </div>
          </header>
        </div>
      );
}
}


export default RegUserHouse;