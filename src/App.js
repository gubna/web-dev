import React from 'react';
import './App.css';
import Card from './component/card.js';
import ElevateAppBar from './component/appbar.js';
import Header from './component/header.js';
import Cards from './component/cards'
import Footer from './component/footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Card /><br></br><br></br>
      <Cards /><br></br>
      <Footer />
    </div>
  );
}

export default App;
