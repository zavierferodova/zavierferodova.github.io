/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import App from './Home'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Zavier Ferodova/i)
  expect(linkElement).toBeInTheDocument()
})
