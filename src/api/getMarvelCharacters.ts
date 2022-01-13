import { fetch } from './fetch'

export const getMarvelCharacterById = async (characterId: number | undefined) => {
  const { data } = await fetch(`/public/characters/${characterId}`)

  return data.data.results
}

export const getMarvelCharactersByLimit = async (limit: number) => {
  const { data } = await fetch(`/public/characters?limit=${limit}&offset=${limit - 30}`)

  return data.data
}
