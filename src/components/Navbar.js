import React from 'react';
import logo from '../doismlogo.png'; // Ensure the path is correct
import './Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
      <img src={logo} className="Navbar-logo" alt="logo" />
      <h1>DOiSM Digital</h1>
      <ul className="Navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
