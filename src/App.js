import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Register from './Pages/RegisterForm';
import Home from './Pages/Dashboard';
import Profile from "./Pages/Profile";
import DebUser from './Pages/DebUser.jsx';
import TicketsUser from './Pages/TicketsUser';
import Payments from './Pages/AdminTickets';
import Paymemts from './Pages/AdminTickets2';
import AdminDebts from "./Pages/AdminDebts";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="ticketsuser" element={<TicketsUser />} />
        <Route path="profile" element={<Profile />} />
        <Route path="debs" element={<DebUser />} />
        <Route path="payments" element={<Payments/>}/>
        <Route path="paymemts" element={<Paymemts/>}/>
        <Route path="admin" element={<AdminDebts/>}/>
        
      </Routes>
    </Router>

  );
}

export default App;
