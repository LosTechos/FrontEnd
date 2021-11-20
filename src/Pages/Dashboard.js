import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import 'fontsource-roboto';
import '../Assets/css/Dashboard.css';
import logo from '../Assets/img/logo.jpg';


const useStyles= makeStyles(()=>({
    root:{
        flexGrow:1,
        backgroundColor:"#E7E6E6"
    },
    logo:{
        marginLeft:"15px",
        marginRight:"15px",
        marginTop:"-10px",
        padding:"0px"
        
    },
    iconos:{
        color:"#FFFFFF",
        fontSize:"50px"
    },
    container:{
        margin:'20px',
        padding:"0px"
    },
    containerGrafica:{
        width:'100%'
    },
    containerTabla:{
        width:'80%',
        padding:'20px',
        marginRight:'20px',
        marginLeft:'20px',
    },
    Tabla:{
        width:'80%',
        alignContent:'center'
    }
}));



function Dashboard(props) {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Navbar />
                </Grid>
                <img src={logo} class="logo" /> 
               

               
                
                
            </Grid>
        </div>
    );
}

export default Dashboard;