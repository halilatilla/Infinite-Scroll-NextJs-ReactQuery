import { FC } from 'react'

import { ICharacterList } from '@src/types'
import Character from '../CharacterListCard/CharacterListCard'

interface Props {
  data: ICharacterList
}

const CharacterList: FC<Props> = ({ data }) => {
  return (
    <div data-testid="character-list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8">
      {data?.pages?.map(({ results }: any) =>
        results?.map((character: any) => <Character key={character.id} character={character} />),
      )}
    </div>
  )
}

export default CharacterList
