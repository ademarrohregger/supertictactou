import React, { useState } from 'react'

const Button = () => {
  const [text, setText] = useState('')
  const isDisabled = Boolean(text)
  return (
    <button className="square" disabled={isDisabled} onClick={() => setText('X')}>
      {text}
    </button>
  )
}

export default Button
