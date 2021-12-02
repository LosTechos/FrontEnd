import Navbar from "../components/Navbar";
import React, { useState } from 'react';
import axios from 'axios';

const state = {
    data: {
        uEmail: "",
        uName: "",
        uPhone: "",
    }
}

const Profile = () => {


    const url = 'https://los-techos.herokuapp.com/api/user/70'
    async function getUserData(){
         await axios.get(url, {
            headers: {
                'access-token': localStorage.getItem("access-token")
            }
        }).then(r => {
            console.log(r.data)
             r.data = state
             console.log(state)

        })
    }
    return (
        <div>
            <Navbar/>
            <div>
                <h2>Profile</h2>
                <button/>
                <div>
                    <div>
                        <h5>Full Name: {state.uName}</h5>
                    </div>
                    <div>
                        <h5>Email: {state.uEmail}</h5>

                    </div>
                    <div>
                        <h5>Phone: {state.uPhone}</h5>
                    </div>
                    <button onClick={getUserData()} style={{height: 40}}/>
                </div>
            </div>
        </div>
    )
}

export default Profile;