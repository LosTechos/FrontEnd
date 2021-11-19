import '../Assets/css/Login.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Login() {
    return (
        <div className="Login">
          <header className="Login-header">
            <div className="container">
              <h1>Welcome!</h1>
              <div className="form-group">
                <input placeholder="Username" type="text" className="form-control"/>
                <br/>
                <input placeholder="Password" type="password" className="form-control"/>
                <br/>
                <button className="loginbtn">Login</button>
                <br/>
                <Link to="/home">Click here if you are a developer</Link>
              </div>
            </div>
          </header>
        </div>
      );
}

export default Login;