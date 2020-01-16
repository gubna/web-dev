import React from 'react';
import Joy from './component/joyoftravel.js';
import Header from './component/header.js';
import Pond from './component/martinspond';
import Bio from './component/bios.js';
import Codes from './component/iconss.js';
import Codess from './component/iconsss.js';
import Codesss from './component/iconssss.js';
import Optigrab from './component/optigrab.js';
import Smurt from './component/verysmurt.js';
import ElevateAppBar from './component/appbar.js';
import './App.css';

function App() {
  return (
    
    <div className="app">
    <div className="container">
      <ElevateAppBar />
      <Header />
      <Bio /><br></br>
      <Joy /><br></br>
      <Optigrab /><br></br>
      <Smurt /><br></br>
      <Pond /><br></br>
      
      <Codesss /><br></br>
      <Codess /><br></br>
      <Codes />

    </div>
    </div>
  );
}

export default App;
