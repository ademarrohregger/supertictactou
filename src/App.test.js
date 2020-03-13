import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('has 9 squares', () => {
    render(<App />);
    const squares =  document.querySelectorAll('.square')
    expect(squares).toHaveLength(9);
  });
})
