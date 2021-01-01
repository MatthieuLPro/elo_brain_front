import React from 'react';
import Navbar from './components/Navbar'

import './App.css';
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
}

export default App;
// voir les cours sur udemy pour l'architecture de la page users