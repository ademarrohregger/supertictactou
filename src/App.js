import React from 'react';
import './App.css';

function App() {
  const squares = Array.from({length: 9}, (item, index) =>
    <button className="square" key={index}>{index}</button>)
  return (
    <div id="App">
      <div className="square-container">
        {squares}
      </div>
    </div>
  );
}

export default App;
