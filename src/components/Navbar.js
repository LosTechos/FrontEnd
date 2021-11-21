import React, { Component } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import User from '@material-ui/icons/SupervisedUserCircleOutlined';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LocalDiningOutlined } from '@material-ui/icons';

import { useNavigate } from "react-router-dom"




const useStyles= makeStyles(()=>({
    root:{
        flexGrow:1,
        width:"101%"
    },
    menuButton:{
      marginRight:'16px',  
    },
    title:{
        flexGrow:1
    },
    imagen:{
        borderRadius: '50%'
    },
    appBar:{
        backgroundColor:"#e9edf5"
    },

}));



function Navbar(){

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/");
      }
   
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="#6d6e70">
                        <MenuIcon fontSize='large' />
                    </IconButton>

                    <Link to="/home">Home</Link>
                    <Link to="/payments">Payments</Link>

                    <Typography variant="h6" className={classes.title}>
                        
                    </Typography>

                    <Link to="/register">Register New User or House</Link>
                    
                        
                    <IconButton color="#6d6e70">
                        <User fontSize='large'/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Navbar;