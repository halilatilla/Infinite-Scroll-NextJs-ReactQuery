import { fetch } from './fetch'

export const getMarvelCharacters = async () => {
  const { data } = await fetch(`/public/characters`)

  return data.data.results
}

export const getMarvelCharactersByLimit = async (limit: number) => {
  const { data } = await fetch(`/public/characters?limit=${limit}&offset=${limit - 30}`)

  return data.data
}
