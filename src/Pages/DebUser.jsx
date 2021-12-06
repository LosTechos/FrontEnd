import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar"
import '../Assets/css/Debs.css'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import UseGetDebs from '../hooks/UseGetDebs';
import { Link } from 'react-router-dom';



const DebUser = () => {

    const [showBox, setShowBox] = useState();
    const [mAmount, setmAmount] = useState();
    const [error, setError] = useState();
    const isObject = (obj) => {
        return Object.prototype.toString.call(obj) === '[object Object]';
    };


    useEffect(async () => {
        const id = localStorage.getItem("roId")
        const data = await UseGetDebs(id);

        if (Array.isArray(data)) {
            const { hDebt, isPaid } = data[0];
            setmAmount(hDebt);

            if (isPaid) {
                setShowBox(true);
            }
            else {
                setShowBox(false);
            }
        } else if (isObject(data)) {
            setError(true);

        }
    }, [])


    return (
        <div>
            <Navbar />

            <Container m="auto">
                {
                    error ?
                        <p>Error, falta token </p>
                        :
                        showBox ?
                            <div className="box-payment--ok" >
                                <p className="box-payment__main-text"> You are up to date with the payment. </p>
                                <p className="box-payment__text-date"> Next payment date: November 10 2021 </p>
                            </div>
                            :
                            <div className="box-payment--error" >
                                <p className="box-payment__main-text"> Late Payment </p>
                                <p className="box-payment__price" >  $ {mAmount} mxn </p>
                                <Link to="/ticketuser" className="btnContainer">
                                    <Button color="Primary" variant="contained" className="btn">Upload Ticket</Button>
                                </Link>
                                <p className="box-payment__text-date"> Next payment date: November 10 2021 </p>
                            </div>
                }
            </Container>
        </div>
    )



}

export default DebUser