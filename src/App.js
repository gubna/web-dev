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
import styled from 'styled-components'

const Shadow = styled.div`
box-shadow: 10px 10px 5px #3f51b5;
text-align: center;
`;

function App() {
  return (
    
    <div className="app">
    <div className="container">
    
      <ElevateAppBar />
      <Header />
      <Shadow><Bio /></Shadow><br></br>
      <Shadow><Joy /></Shadow><br></br>
      <Shadow><Optigrab /></Shadow><br></br>
      <Shadow><Smurt /></Shadow><br></br>
      <Shadow><Pond /></Shadow><br></br><br></br>
      
      <Codesss /><br></br>
      <Codess /><br></br>
      <Codes />

    </div>
    </div>
  );
}

export default App;
