export interface ICharacter {
  id: number
  name: string
  description?: string
  thumbnail?: IThumbnail
  comics?: IComics
}

interface IThumbnail {
  extension: string
  path: string
}

interface IComics {
  items: IItems[]
}

interface IItems {
  name: string
}
