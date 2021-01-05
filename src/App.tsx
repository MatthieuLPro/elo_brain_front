import React, { Component } from 'react';
import Navbar from './components/Navbar';
import UserInfo from './components/users/UserInfo'
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar title={"Testing Mode"} />
                <UserInfo />
            </div>);
    }
}

export default App;