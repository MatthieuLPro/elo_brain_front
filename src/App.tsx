import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Users from './components/users/Users'
import './App.css';
<<<<<<< HEAD
import FetchingPlayersTable from "./lib/fetching/fetchingPlayersTable";

function App() {
  const PlayersCollection = <FetchingPlayersTable />;
  return (
    <div className="App">
     <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { PlayersCollection }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======


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
>>>>>>> front
}

export default App;