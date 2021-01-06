import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Users from './components/users/Users'
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar title={"Testing Mode"} />
                <div className="container">
                    <Users />
                </div>
            </div>);
    }
}

export default App;