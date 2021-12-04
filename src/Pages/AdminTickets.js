import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'react'
import Navbar from '../components/Navbar'
import {  Link } from 'react-router-dom';

const url = 'https://los-techos.herokuapp.com/api/verifytest'
const headers = {
    'access-token': localStorage.getItem("access-token")
}
const data = {
    'uId': 70,
    'uName': 'Junaito',
    "Debt":7850,
    "ExpireDate":"2021-12-06T04:19:34.620Z"

}


const AdminTickets = () => {
    const [data, setData] = useState();
    async function getImage(){
        await axios.get(url, {
            headers: {
                'access-token': localStorage.getItem("access-token")
            },
            params: {
                'uId': 70
            }
        }).then(r => {
            console.log(r.data.pImage)
        })
    }
    async function putData(){
        await axios.put(url, data, { headers }).then(r => {
            console.log(r.data)
        })
    }
    useEffect(() => {
        getImage();
    });
    return (
        <div>
            <Navbar/>
            <p>Name: Joel</p>
            <img
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                alt="new"
            />
            <p>Debt: 17950</p>
            <Link to="/admin">
                <button onClick={putData}>Accept</button>
            </Link>
            <Link to="/admin">
                <button>Regect</button>
            </Link>

        </div>
    )
}

export default AdminTickets;