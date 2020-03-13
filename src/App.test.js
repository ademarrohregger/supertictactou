import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('has 9 squares', () => {
    render(<App />)
    const squares = document.querySelectorAll('.square')
    expect(squares).toHaveLength(9)
  })

  test('has a square that changes text on click', () => {
    render(<App />)
    const square = document.querySelector('.square')
    const oldText = square.innerHTML
    square.click()
    const newText = square.innerHTML
    expect(newText).not.toBe(oldText)
  })
})
