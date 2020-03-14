import React, { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {
  const [player, setPlayer] = useState('X')

  const squares = Array.from({ length: 9 }, (item, index) => (
    <Button key={index} player={player} setPlayer={setPlayer}></Button>
  ))
  return (
    <div id="App">
      <div className="square-container">{squares}</div>
    </div>
  )
}

export default App
