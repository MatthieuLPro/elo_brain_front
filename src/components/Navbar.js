import React from 'react';
import './Navbar.style.css';
import logo from '../images/vsfe5.png';
import PropTypes from 'prop-types';

const Navbar = (props) => {
    return (
        <nav className="navbar bg-primary">
            <img src={logo} className="logo" alt="logo" />
            {props.title}
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

Navbar.defaultProps = {
    title: "Elo Brain App" 
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Navbar;
