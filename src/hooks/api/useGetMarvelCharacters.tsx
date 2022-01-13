import { useInfiniteQuery } from 'react-query'

import { getMarvelCharactersByLimit } from '../../api'

export const useGetMarvelCharactersByLimit = ({ initialData, limit: pageLimit }: any) => {
  const { data, hasNextPage, fetchNextPage, isError, isFetchingNextPage } = useInfiniteQuery(
    'getMarvelCharactersByLimit',
    ({ pageParam = pageLimit }) => getMarvelCharactersByLimit(pageParam),
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
