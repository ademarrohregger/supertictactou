import React, { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('--')

  const squares = Array.from({ length: 9 }, (item, index) => (
    <button className="square" key={index} onClick={() => setText('X')}>
      {text}
    </button>
  ))
  return (
    <div id="App">
      <div className="square-container">{squares}</div>
    </div>
  )
}

export default App
