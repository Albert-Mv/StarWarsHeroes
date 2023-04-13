import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type IHero } from '../../types/IHero'
import { type IHeroField } from '../../types/IHeroField'
import { type IHeroState } from '../../types/IHeroState'

const initialHeroState: IHeroState = {
  isDirty: false,
  name: '',
  birth_year: '',
  eye_color: '',
  gender: '',
  hair_color: '',
  height: '',
  mass: '',
  skin_color: '',
  homeworld: '',
  films: [],
  species: [],
  starships: [],
  vehicles: [],
  url: '',
  created: '',
  edited: '',
}

export const heroSlice = createSlice({
  name: 'hero',
  initialState: initialHeroState,
  reducers: {
    setHeroData: (state: IHeroState, action: PayloadAction<IHero>) => {
      return {
        ...state,
        ...action.payload,
        isDirty: true,
      }
    },
    updateHeroField: (state: IHeroState, action: PayloadAction<IHeroField>) => {
      const { field, value } = action.payload

      return {
        ...state,
        [field]: value,
        isDirty: true,
      }
    },
    clearHeroData: () => {
      return initialHeroState
    },
  },
})

export const { setHeroData, updateHeroField, clearHeroData } = heroSlice.actions

export default heroSlice.reducer
