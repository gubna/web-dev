import React from 'react';
import Card from './component/card.js';
import Header from './component/header.js';
import Cards from './component/cards';
import Cardss from './component/cardss.js';
import Codes from './component/iconss.js';
import Codess from './component/iconsss.js';
import Codesss from './component/iconssss.js';
import Cardsss from './component/cardsss.js';
import ElevateAppBar from './component/appbar.js';
import './App.css';

function App() {
  return (
    
    <div className="app">
    <div className="container">
      <ElevateAppBar />
      <Header />
      <Card /><br></br>
      <Cardsss /><br></br>
      <Cards /><br></br>
      <Cardss /><br></br>
      <Codesss /><br></br>
      <Codess /><br></br>
      <Codes />

    </div>
    </div>
  );
}

export default App;
