
import axios from "axios";
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Register from './Pages/RegisterForm';
import Home from './Pages/Dashboard';
import Payments from './Pages/Ticketadmin';
import Profile from "./Pages/Profile";


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="payments" element={<Payments/>}/>
      <Route path="profile" element={<Profile/>}/>
    </Routes>
  </Router>
  
  );
}

export default App;
