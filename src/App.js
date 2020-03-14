import React from 'react'
import './App.css'
import Button from './Button'

function App() {
  const squares = Array.from({ length: 9 }, (item, index) => <Button key={index}></Button>)
  return (
    <div id="App">
      <div className="square-container">{squares}</div>
    </div>
  )
}

export default App
