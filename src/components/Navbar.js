import React from 'react';
import './Navbar.style.css';
import logo from '../images/vsfe5.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="logo" alt="logo" />
      <ul>
        <li>
          <a href="./Home">Home</a>
        </li>
        <li>
          <a href="./About">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
