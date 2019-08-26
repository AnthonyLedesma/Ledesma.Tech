import React from 'react';
// import logo from './logo.svg';
import Bio from './components/Bio';
import Intro from './components/Intro';
import Footer from './components/Footer';
import SVGDivider from './components/dividers';
import zigzag from './components/lib/zigzag';
import './App.css';

import metadata from './resume.json';

const zigzagFields = [
  { field: "color", type: "string" },
  { field: "count", type: "range", min: 10, max: 40, step: 1 }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro 
        text={metadata.intro}
        color={metadata.colors.heading}
        />
      </header>
      <body>
        <Bio 
          text={metadata.bio}
          color={metadata.colors.center}
        />
        <SVGDivider
      title="Zigzag"
      aboveColor={{}}
      belowColor={{}}
      Component={zigzag}
      defaultProps={{ color: "#F7F7F7", count: 20 }}
      fields={zigzagFields}
    />
      </body>
      <footer>
        <Footer
          text={metadata.footer}
          color={metadata.colors.Footing}
        />
      </footer>
    </div>
  );
}

export default App;
