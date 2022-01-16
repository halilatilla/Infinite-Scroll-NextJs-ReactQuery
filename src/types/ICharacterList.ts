import { ICharacter } from '@src/types'

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
