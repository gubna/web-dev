import React from 'react';
import Card from './component/card.js';
import Header from './component/header.js';
import Cards from './component/cards';
import Cardss from './component/cardss.js';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import Code from './component/icons.js';
import Codes from './component/iconss.js';
import Codess from './component/iconsss.js';
import Codesss from './component/iconssss.js';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Card /><br></br><br></br>
      <Cards /><br></br><br></br>
      <Cardss /><br></br>
      <Codesss /><br></br>
      <Codess /><br></br>
      <Codes />
    </div>
  );
}

export default App;
