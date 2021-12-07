import React from 'react';
import '../Assets/css/Login.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

class Login extends React.Component {

<<<<<<< HEAD
<<<<<<< HEAD

  state = {
    form: {
      "uName": "",
      "uPwdHash": ""
    },
    error: false,
    errorMsg: ""
  }

  handlerSubmit(e) {
    e.preventDefault();
  }

  handlerChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
    //console.log(this.state.form);
  }

  handlerButton = () => {
    let url = "https://los-techos.herokuapp.com/api/login";
    axios.post(url, this.state.form)
      .then(response => {
        if (response.data.access === true) {
          console.log(response);
          localStorage.setItem("access-token", response.data.token);
          localStorage.setItem("roId", response.data.roId);
          localStorage.setItem("id", response.data.id);
          this.props.navigate('home');
        } else {

          this.setState({
            error: true,
            errorMsg: response.data.message
          })
        }

      }).catch(error => {
        console.log(error)
        this.setState({
          error: true,
          errorMsg: "Error connecting to the Service"
        })

      })
  }
=======

    state = {
        form: {
            "uName": "",
            "uPwdHash": ""
        },
        error: false,
        errorMsg: ""
    }

    handlerSubmit(e) {
        e.preventDefault();
    }

    handlerChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
=======

    state = {
        form: {
            "uName": "",
            "uPwdHash": ""
        },
        error: false,
        errorMsg: ""
    }

    handlerSubmit(e) {
        e.preventDefault();
    }

    handlerChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
>>>>>>> 697f910440c46641668ee6122de530a35276c11d
        //console.log(this.state.form);
    }

    handlerButton = () => {
        let url = "https://los-techos.herokuapp.com/api/login";
        axios.post(url, this.state.form)
            .then(response => {
                if (response.data.access === true) {
                    console.log(response);
                    localStorage.setItem("access-token", response.data.token);
                    localStorage.setItem("roId", response.data.roId);
                    this.props.navigate('home');
                } else {
<<<<<<< HEAD
>>>>>>> d87e61e3fabbf2d5025de829f0c1233502ae35ca
=======
>>>>>>> 697f910440c46641668ee6122de530a35276c11d

                    this.setState({
                        error: true,
                        errorMsg: response.data.message
                    })
                }

<<<<<<< HEAD
<<<<<<< HEAD
  render() {

    return (
      <React.Fragment>
        <div className="Login">
          <header className="Login-header">
            <form onSubmit={this.handlerSubmit}>
              <div className="container">

                <div className="form-group">
                  <input className="loginplace" placeholder="User" type="text" name="uName" onChange={this.handlerChange} />

                  <input className="loginplace" placeholder="Password" type="password" name="uPwdHash" onChange={this.handlerChange} />
                  <br />
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

function WithNavigate(props) {
  let navigate = useNavigate();
  return <Login{...props} navigate={navigate} />
=======
            }).catch(error => {
            console.log(error)
            this.setState({
                error: true,
                errorMsg: "Error connecting to the Service"
            })
        })
    }


    render() {

        return (
            <React.Fragment>
                <div className="Login">
                    <header className="Login-header">
                        <form onSubmit={this.handlerSubmit}>
                            <div className="container">
                                <h1>Welcome!</h1>
                                <div className="form-group">
                                    <input className="loginplace" placeholder="Name" type="text" name="uName"
                                           onChange={this.handlerChange}/>
                                    <br/>
                                    <input className="loginplace" placeholder="Password" type="password" name="uPwdHash"
                                           onChange={this.handlerChange}/>
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

function WithNavigate(props) {
    let navigate = useNavigate();
    return <Login{...props} navigate={navigate}/>
>>>>>>> d87e61e3fabbf2d5025de829f0c1233502ae35ca
=======
            }).catch(error => {
            console.log(error)
            this.setState({
                error: true,
                errorMsg: "Error connecting to the Service"
            })
        })
    }


    render() {

        return (
            <React.Fragment>
                <div className="Login">
                    <header className="Login-header">
                        <form onSubmit={this.handlerSubmit}>
                            <div className="container">
                                <h1>Welcome!</h1>
                                <div className="form-group">
                                    <input className="loginplace" placeholder="Name" type="text" name="uName"
                                           onChange={this.handlerChange}/>
                                    <br/>
                                    <input className="loginplace" placeholder="Password" type="password" name="uPwdHash"
                                           onChange={this.handlerChange}/>
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

function WithNavigate(props) {
    let navigate = useNavigate();
    return <Login{...props} navigate={navigate}/>
>>>>>>> 697f910440c46641668ee6122de530a35276c11d
}

export default WithNavigate;