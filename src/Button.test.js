import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('Button', () => {
  test("can't be clicked twice", () => {
    render(<App />)
    const square = document.querySelector('.square')
    square.click()
    const isDisabled = square.disabled
    expect(isDisabled).toBe(true)
  })
})
