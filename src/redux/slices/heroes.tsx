import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IHeroesState } from "../../types/IHeroesState";
import { IHero } from "../../types/IHero";

const initialHeroesState: IHeroesState = {
  heroes: [],
};

export const heroesSlice = createSlice({
  name: "heroes",
  initialState: initialHeroesState,
  reducers: {
    addHero: (state: IHeroesState, action: PayloadAction<IHero>) => {
      state.heroes.push(action.payload);

      return state;
    },
    addHeroes: (state: IHeroesState, action: PayloadAction<IHero[]>) => {
      state.heroes = action.payload;

      return state;
    },
    removeHeroByName: (state: IHeroesState, action: PayloadAction<string>) => {
      const name = action.payload;
      state.heroes = state.heroes.filter((item) => item.name === name);

      return state;
    },
  },
});

export const { addHero, removeHeroByName } = heroesSlice.actions;

export default heroesSlice.reducer;
