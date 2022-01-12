import { render, screen } from '@testing-library/react'

import Button from './Button'

// Just a sample test.
describe('Index Page', () => {
  it('renders correctly', () => {
    const { container } = render(<Button label="Hello" />)
    expect(container).toMatchSnapshot()
  })

  it('renders button', () => {
    // Given
    render(<Button label="Hello" />)

    // When
    const mainButton = screen.getByRole('button')

    // Then
    expect(mainButton).toBeInTheDocument()
  })
})
