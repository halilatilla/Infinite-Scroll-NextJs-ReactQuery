import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { ICharacter } from '@src/types'
interface Props {
  character: ICharacter
}

const CharacterListCard: FC<Props> = ({ character }) => {
  return (
    <Link href={`/character/${character.id}`}>
      <a className="group rounded overflow-hidden border bg-gray-700" data-testid="character-list-card">
        <div className="h-[200px] relative">
          <Image
            layout="fill"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWg8AAc8BJpg2zxQAAAAASUVORK5CYII="
            className="object-center object-cover transition duration-300 transform  group-hover:scale-110 "
            src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
            alt={character.name}
          />
        </div>
        <p className="font-bold text-center p-2">{character.name}</p>
      </a>
    </Link>
  )
}

export default CharacterListCard
