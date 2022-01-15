import { render, screen } from '@testing-library/react'

import CharacterDetailCard from './CharacterDetailCard'

jest.mock('next/image', () => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />
  },
}))

describe('Character Detail Card', () => {
  const CHARACTER = {
    character: { id: 1, thumbnail: { path: '/', extension: 'jpg' }, name: '', description: '', comics: { items: [] } },
  }
  it('renders correctly', () => {
    const { container } = render(<CharacterDetailCard {...CHARACTER} />)
    expect(container).toMatchSnapshot()
  })

  it('renders CharacterDetailCard', () => {
    render(<CharacterDetailCard {...CHARACTER} />)

    const characterDetailCard = screen.getByTestId('character-detail-card')

    expect(characterDetailCard).toBeInTheDocument()
  })
})
