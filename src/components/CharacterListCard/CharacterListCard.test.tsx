import { render, screen } from '@testing-library/react'

import CharacterListCard from './CharacterListCard'

describe('Character Detail List Card', () => {
  const CHARACTER = {
    character: { id: 1, thumbnail: { path: '/', extension: 'jpg' }, name: '', description: '', comics: { items: [] } },
  }

  it('renders correctly', () => {
    const { container } = render(<CharacterListCard {...CHARACTER} />)
    expect(container).toMatchSnapshot()
  })

  it('renders CharacterListCard', () => {
    render(<CharacterListCard {...CHARACTER} />)

    const characterListCard = screen.getByTestId('character-list-card')

    expect(characterListCard).toBeInTheDocument()
  })
})
