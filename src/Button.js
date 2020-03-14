import React, { useState } from 'react'

const Button = () => {
  const [text, setText] = useState('--')
  return (
    <button className="square" onClick={() => setText('X')}>
      {text}
    </button>
  )
}

export default Button
