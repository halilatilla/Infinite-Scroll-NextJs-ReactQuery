import { useRef } from 'react'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'

import { CharacterList, Loading } from '@src/components'
import { getMarvelCharactersByLimit } from '@src/api'
import { useGetMarvelCharactersByLimit, useIntersectionObserver } from '@src/hooks'

const Home: NextPage = (props: any) => {
  const { data, hasNextPage, fetchNextPage, isError, isFetchingNextPage } = useGetMarvelCharactersByLimit({
    initialData: props.data,
    limit: 30,
  })

  const loadMoreRef = useRef<HTMLHeadingElement>(null)

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  })

  return (
    <>
      <Head>
        <title>Marvel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="container mx-auto p-3 md:p-6 space-y-5">
        {data && <CharacterList data={data} />}
        {isError ? (
          <div className="text-red-500 font-bold"> You may not request more than 100 items. </div>
        ) : (
          <div ref={loadMoreRef} className={`${!hasNextPage ? 'hidden' : ''}`}>
            {isFetchingNextPage && <Loading loadingText="Loading more..." />}
          </div>
        )}
      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const data = await getMarvelCharactersByLimit(30)
  return { props: { data } }
}
