import { IHero } from './IHero';
import { IPagination } from './IPagination';

export interface IHeroesState {
  list: IHero[]
  isDirty: boolean
  errorMessage: string
  isLoading: boolean
  pagination: IPagination
}
