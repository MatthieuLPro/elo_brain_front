import React, {Component} from 'react';
import './Navbar.style.css';
import logo from '../images/vsfe5.png';
import PropTypes from 'prop-types';

class Navbar extends Component {
    static defaultProps = {
        title: "Elo Brain App" 
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }

    render(){
        return (
            <nav className="navbar bg-primary">
                <img src={logo} className="logo" alt="logo" />
                {this.props.title}
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
    }
};

export default Navbar;
