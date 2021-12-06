<<<<<<< HEAD
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import User from '@material-ui/icons/SupervisedUserCircleOutlined';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
=======
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom"
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InputIcon from '@mui/icons-material/Input';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';
import slogo from '../Assets/img/slogo.jpg';
import { createStyles } from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';


>>>>>>> d87e61e3fabbf2d5025de829f0c1233502ae35ca


const drawerWidth = 240;

const role = localStorage.getItem("roId");


<<<<<<< HEAD
import { useNavigate } from "react-router-dom"



const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        width: "101%"
    },
    menuButton: {
        marginRight: '16px',
    },
    title: {
        flexGrow: 1
    },
    imagen: {
        borderRadius: '50%'
    },
    appBar: {
        backgroundColor: "#e9edf5"
    },
=======
>>>>>>> d87e61e3fabbf2d5025de829f0c1233502ae35ca

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

/*Carusel */



<<<<<<< HEAD
function Navbar() {
=======
>>>>>>> d87e61e3fabbf2d5025de829f0c1233502ae35ca

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    const navigate = useNavigate();
<<<<<<< HEAD

    const role = localStorage.getItem("roId");

    const logout = () => {
        localStorage.clear();
        navigate("/");
    }

    const classes = useStyles();

    if (role == 1) {
        return (

            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="#6d6e70">
                            <MenuIcon fontSize='large' />
                        </IconButton>

                        {/* <Link to="/home">Home</Link>
                        <Link to="/payments">Payments</Link> */}

                        <Typography variant="h6" className={classes.title}>

                        </Typography>

                        {/* <Link to="/register">Register New User or House</Link> */}


                        <Button color="#6d6e70" onClick={logout}>Logout</Button>


                    </Toolbar>
                </AppBar>


            </div>




        );
    }
    else {
        return (

            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="#6d6e70">
                            <MenuIcon fontSize='large' />
                        </IconButton>

                        {/* <Link to="/home">Home</Link>
                        <Link to="/payments">Payments</Link> */}

                        <Typography variant="h6" className={classes.title}>

                        </Typography>

                        <Button color="#6d6e70" onClick={logout}>Logout</Button>

                        <IconButton color="#6d6e70">
                            <User fontSize='large' />
                        </IconButton>
                    </Toolbar>
                </AppBar>

            </div>
=======
  const logout = () => {
      localStorage.clear();
      navigate("/");
    }
    
    if(role==1){
        return (
            <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 180, ...(open && { display: 'none' }) }}
          >
            <MenuIcon sx={{ fontSize: 40}}/>
          </IconButton>
          <Typography variant="h4" noWrap component="div">
            Josue Reaza ADMIN
          </Typography>
          <IconButton color="inherit" aria-label="Save">
            <AccountCircleRoundedIcon sx={{ fontSize: 40}}/>
          </IconButton>
    
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
            <Paper sx= {{width: 80, height: 80, mr: 5}}>
            <img src= {slogo}  />
            </Paper>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
  <ListItem component={Link} to="/home">
    <ListItemIcon>
      <HomeIcon sx={{ fontSize: 35 }} />
    </ListItemIcon>
    <ListItemText primaryTypographyProps={{fontSize: '25px'}}  primary="Home" />
  </ListItem>
  <ListItem component={Link} to="/admin">
    <ListItemIcon>
      <AssignmentIcon sx={{ fontSize: 35 }} />
    </ListItemIcon>
    <ListItemText primaryTypographyProps={{fontSize: '25px'}} primary="Payments" />
  </ListItem>
  <ListItem component={Link} to="/profile">
    <ListItemIcon>
      <AccountCircleIcon sx={{ fontSize: 35 }} />
    </ListItemIcon>
    <ListItemText primaryTypographyProps={{fontSize: '25px'}} primary="Profile" />
  </ListItem>
  <ListItem component={Link} to="/register">
    <ListItemIcon>
      <AccountCircleIcon sx={{ fontSize: 35 }} />
    </ListItemIcon>
    <ListItemText primaryTypographyProps={{fontSize: '25px'}} primary="Register New User & House" />
  </ListItem>
</List>
        <Divider />
        <List>
  <ListItem component={Link} to="/" onClick={logout}>
    <ListItemIcon>
      <InputIcon sx={{ fontSize: 35 }}/>
    </ListItemIcon>
    <ListItemText primaryTypographyProps={{fontSize: '25px'}} primary="Log Out" />
  </ListItem>
</List>
  
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        
        <Carousel autoPlay height="200px" width= "400px" length= "400px">
                <div>
                    <img src= {slogo}  />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src= {slogo}  />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src= {slogo}  />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        <Typography paragraph>
          Lorem 
        </Typography>
        <Typography paragraph>
          Consequat
        </Typography>
      </Main>
    
</Box>
        
    );}
    else{
        return (
            <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 180, ...(open && { display: 'none' }) }}
          >
            <MenuIcon sx={{ fontSize: 40}}/>
          </IconButton>
          <Typography variant="h4" noWrap component="div">
            Josue Reaza USER
          </Typography>
          <IconButton color="inherit" aria-label="Save">
            <AccountCircleRoundedIcon sx={{ fontSize: 40}}/>
          </IconButton>
    
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
            <Paper sx= {{width: 80, height: 80, mr: 5}}>
            <img src= {slogo}  />
            </Paper>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
  <ListItem component={Link} to="home">
    <ListItemIcon>
      <HomeIcon sx={{ fontSize: 35 }} />
    </ListItemIcon>
    <ListItemText primaryTypographyProps={{fontSize: '25px'}}  primary="Home" />
  </ListItem>
  <ListItem component={Link} to="/debs">
    <ListItemIcon>
      <AssignmentIcon sx={{ fontSize: 35 }} />
    </ListItemIcon>
    <ListItemText primaryTypographyProps={{fontSize: '25px'}} primary="Payments" />
  </ListItem>
  <ListItem component={Link} to="/profile">
    <ListItemIcon>
      <AccountCircleIcon sx={{ fontSize: 35 }} />
    </ListItemIcon>
    <ListItemText primaryTypographyProps={{fontSize: '25px'}} primary="Profile" />
  </ListItem>
</List>
        <Divider />
        <List>
  <ListItem component={Link} to="/" onClick={logout}>
    <ListItemIcon>
      <InputIcon sx={{ fontSize: 35 }}/>
    </ListItemIcon>
    <ListItemText primaryTypographyProps={{fontSize: '25px'}} primary="Log Out" />
  </ListItem>
</List>
  
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        
        <Carousel autoPlay height="200px" width= "400px" length= "400px">
                <div>
                    <img src= {slogo}  />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src= {slogo}  />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src= {slogo}  />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        <Typography paragraph>
          Lorem 
        </Typography>
        <Typography paragraph>
          Consequat
        </Typography>
      </Main>
    
</Box>

            
>>>>>>> d87e61e3fabbf2d5025de829f0c1233502ae35ca
        );
    }
}

