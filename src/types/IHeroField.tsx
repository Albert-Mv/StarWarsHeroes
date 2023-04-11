import { IHero } from "./IHero";

export interface IHeroField {
  field: keyof IHero;
  value: string | string[];
}
