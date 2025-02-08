import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>InvestMate</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/">Learn</Link></li>
        <li><Link to="/">Contact us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
