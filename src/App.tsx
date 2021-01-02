import React from 'react';
import Navbar from './components/Navbar'

import './App.css';
import ParagraphWithFetching from "./lib/molecules/paragraph_with_fetching";

function App() {
  const EditParagraph = <ParagraphWithFetching />;
  return (
    <div className="App">
     <Navbar />
     
    </div>
  );
}

export default App;
// voir les cours sur udemy pour l'architecture de la page users