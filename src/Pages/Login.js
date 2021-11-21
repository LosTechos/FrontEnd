import React, {useState} from 'react';
import '../Assets/css/Login.css';
import axios from 'axios';
import { Email } from '@material-ui/icons';


function Login(){
  const [uName, setUName] = useState("");
  const [uPwdHash, setUPwdHash] = useState("");

  const login = () => {
    axios.post("https://los-techos.herokuapp.com/api/login", {
      name: uName,
      password: uPwdHash,
    }).then((response) => {
      console.log(response);
    });
  }

  return (
    <div className="Login">
    <header className="Login-header">
      <form>
          <div className="container">
            <h1>Welcome!</h1>
            <div className="form-group">
              <input placeholder="Name" type="text" onChange={(e) => {setUName(e.target.value);}}/>
              <br/>
              <input placeholder="Password" type="password" onChange={(e) => {setUPwdHash(e.target.value);}}/>
              <br/>
              <button className="loginbtn" onClick={login}>Login</button> 
            </div>
          </div>
      </form>
    </header>
    </div>
  );
}

export default Login;