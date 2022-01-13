import { ICharacter } from '@src/lib'

export interface ICharacterList {
  pagesParam?: []
  pages: IPages[]
}

interface IPages {
  count: number
  limit: number
  offset: number
  results: IResults
}

interface IResults {
  character: ICharacter[]
}
