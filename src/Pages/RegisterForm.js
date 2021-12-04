import '../Assets/css/RegUserHouse.css'
import axios from "axios";
import React, { useState } from 'react';

import { render } from '@testing-library/react';
import { Component } from 'react';

const url = "https://los-techos.herokuapp.com/api/"

const RegisterForm = () => {

    const [state = {
        data: [],
        form: {
            uName: "",
            uPwdHash: "",
            uEmail: "",
            uPhone: "",
            roId: 2,
            hNumber: "",
            hAddress: "",
            hMonthlyMount: ""
        }
    }, setState] = useState();

    const peticionPost = async (e) => {
        e.preventDefault()
        await axios.post(url + "userRegister", state.form
        ).then((response) => {
            console.log(response)

        }).catch(error => {
            console.log(error.message);
        })
    }


    const handleChange = async e => {

        await setState({
            form: {
                ...state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(state.form);
    }
    return (
        <div className="Register">
            <header className="Register-header">
                <div className="containerMain">
                    <form className="user-form" onSubmit={peticionPost}>

                        <h3>Enter your personal information</h3>
                        <input name="uName" placeholder="Full Name" type="text" className="form-control"
                            onChange={handleChange} value={state.form.uName} />

                        <input name="uPwdHash" placeholder="Password" type="password" className="form-control"
                            onChange={handleChange} value={state.form.uPwdHash} />

                        <input name="uEmail" placeholder="Mail" type="text" className="form-control"
                            onChange={handleChange} value={state.form.uEmail} />

                        <input name="uPhone" placeholder="Phone" type="text" className="form-control"
                            onChange={handleChange} value={state.form.uPhone} />

                        <input name="roId" placeholder="Role" type="text" className="form-control"
                            onChange={handleChange} value={state.form.roId} />

                        <h3>Enter your personal information</h3>
                        <input name="hNumber" placeholder="Exterior Number" type="text" className="form-control"
                            onChange={handleChange} value={state.form.hNumber} />

                        <input name="hAddress" placeholder="Street" type="text" className="form-control"
                            onChange={handleChange} value={state.form.hAddress} />

                        <input name="hMonthlyMount" placeholder="Monthly Amount" type="text" className="form-control"
                            onChange={handleChange} value={state.form.hMonthlyMount} />

                        <button className="Submitbtn" type="submit">Submit User</button>
                    </form>
                </div>
            </header>
        </div>
    )

}

export default RegisterForm;