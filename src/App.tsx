import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParagraphWithFetching from "./lib/molecules/paragraph_with_fetching";

function App() {
  const EditParagraph = <ParagraphWithFetching />;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { EditParagraph }
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
