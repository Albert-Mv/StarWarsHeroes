import { type IHero } from './IHero'
import { type IPagination } from './IPagination'

export interface IHeroesState {
  list: IHero[]
  isDirty: boolean
  errorMessage: string
  isLoading: boolean
  pagination: IPagination
}
