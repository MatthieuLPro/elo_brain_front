import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar title={"Testing Mode"} />
                <h1>Elo</h1>
            </div>);
    }
}

export default App;