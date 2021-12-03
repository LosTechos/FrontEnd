
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Register from './Pages/RegisterForm';
import Home from './Pages/Dashboard';
import PaymentsAdmin from './Pages/Ticketadmin';
import Profile from "./Pages/Profile";
import DebUser from './Pages/DebUser.jsx';
import PaymentsUser from './Pages/TicketsUser'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="payments" element={<PaymentsUser />} />
        <Route path="profile" element={<Profile />} />
        <Route path="debs" element={<DebUser />} />
        
      </Routes>
    </Router>

  );
}

export default App;
