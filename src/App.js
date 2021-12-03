
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Register from './Pages/RegisterForm';
import Home from './Pages/Dashboard';
import Payments from './Pages/AdminTickets';
import Paymemts from './Pages/AdminTickets2';
import Profile from "./Pages/Profile";
import AdminDebts from "./Pages/AdminDebts"


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="payments" element={<Payments/>}/>
      <Route path="paymemts" element={<Paymemts/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="admin" element={<AdminDebts/>}/>

    </Routes>
  </Router>
  
  );
}

export default App;
