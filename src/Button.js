import React, { useState } from 'react'

const Button = ({ player, setPlayer }) => {
  const [text, setText] = useState('')
  const isDisabled = Boolean(text)

  const onClick = () => {
    setPlayer(player === 'O' ? 'X' : 'O')
    setText(player)
  }

  return (
    <button className="square" disabled={isDisabled} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
