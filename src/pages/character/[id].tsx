import { NextPage, GetServerSideProps } from 'next'

import { getMarvelCharacterById } from '@src/api'
import { CharacterDetailCard } from '@src/components'

const Character: NextPage = ({ data }: any) => {
  return (
    <main className="container mx-auto p-3 md:p-6">
      {data.map((character: any) => (
        <CharacterDetailCard key={character.id} character={character} />
      ))}
    </main>
  )
}

export default Character

export const getServerSideProps: GetServerSideProps = async ({ params }: any) => {
  const data = await getMarvelCharacterById(params?.id)
  return { props: { data } }
}
