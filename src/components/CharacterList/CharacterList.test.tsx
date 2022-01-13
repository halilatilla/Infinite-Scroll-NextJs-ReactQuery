import { render, screen } from '@testing-library/react'

import CharacterList from './CharacterList'

describe('Character List', () => {
  it('renders correctly', () => {
    const { container } = render(<CharacterList />)
    expect(container).toMatchSnapshot()
  })

  it('renders CharacterList', () => {
    render(<CharacterList />)

    const characterList = screen.getByTestId('character-list')

    expect(characterList).toBeInTheDocument()
  })
})
