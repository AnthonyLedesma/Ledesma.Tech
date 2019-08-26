import React from 'react';
// import logo from './logo.svg';
import Bio from './components/Bio';
import Intro from './components/Intro';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro />
      </header>
      <body>
        <Bio />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
