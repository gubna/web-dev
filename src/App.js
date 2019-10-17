import React from 'react';
import Card from './component/card.js';
import Header from './component/header.js';
import Cards from './component/cards';
import Cardss from './component/cardss.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Card /><br></br><br></br>
      <Cards /><br></br><br></br>
      <Cardss /><br></br>
    </div>
  );
}

export default App;
