
import axios from "axios";
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Register from './Pages/RegUserHouse';
import Home from './Pages/Dashboard';
import Payments from './Pages/Ticketadmin';


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="payments" element={<Payments/>}/>
    </Routes>
  </Router>
  
  );
}

export default App;
