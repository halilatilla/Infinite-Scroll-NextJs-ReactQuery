import { useRef } from 'react'
import { NextPage, GetStaticProps } from 'next'

import { CharacterList } from '@src/components'
import { getMarvelCharactersByLimit } from '@src/api'
import { useGetMarvelCharactersByLimit, useIntersectionObserver } from '@src/hooks'

const Home: NextPage = (props: any) => {
  const { data, hasNextPage, fetchNextPage, isError, isFetchingNextPage } = useGetMarvelCharactersByLimit({
    initialData: props.data,
  })

  const loadMoreRef = useRef<HTMLHeadingElement>(null)

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  })

  return (
    <main className="container mx-auto p-3 md:p-6">
      {data && <CharacterList data={data} />}
      {isError ? (
        <div className="text-red-500 font-bold"> You may not request more than 100 items. </div>
      ) : (
        <div ref={loadMoreRef} className={`${!hasNextPage ? 'hidden' : ''}`}>
          {isFetchingNextPage ? 'Loading more...' : ''}
        </div>
      )}
    </main>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const data = await getMarvelCharactersByLimit(30)
  return { props: { data } }
}
