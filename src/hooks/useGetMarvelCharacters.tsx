import { useInfiniteQuery } from 'react-query'

import { getMarvelCharactersByLimit } from '../api'

export const useGetMarvelCharactersByLimit = ({ initialData }: any) => {
  const { data, hasNextPage, fetchNextPage, isError, isFetchingNextPage } = useInfiniteQuery(
    'getMarvelCharactersByLimit',
    ({ pageParam = 30 }) => getMarvelCharactersByLimit(pageParam),
    {
      initialData,
      getNextPageParam: ({ total, limit }) => {
        const nextPage = limit + 30
        return nextPage <= total ? nextPage : undefined
      },
    },
  )

  return { data, hasNextPage, fetchNextPage, isError, isFetchingNextPage }
}
