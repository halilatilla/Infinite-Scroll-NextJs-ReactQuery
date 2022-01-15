import { render, screen } from '@testing-library/react'

import CharacterList from './CharacterList'

describe('Character List', () => {
  const DATA = {
    data: { pages: [] },
  }

  it('renders correctly', () => {
    const { container } = render(<CharacterList {...DATA} />)
    expect(container).toMatchSnapshot()
  })

  it('renders CharacterList', () => {
    render(<CharacterList {...DATA} />)

    const characterList = screen.getByTestId('character-list')

    expect(characterList).toBeInTheDocument()
  })
})
