import { type IHero } from './IHero'

export interface IHeroState extends IHero {
  isDirty: boolean
}
