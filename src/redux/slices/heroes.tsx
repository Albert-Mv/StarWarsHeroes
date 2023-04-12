import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IHeroesState } from "../../types/IHeroesState";
import { IHero } from "../../types/IHero";
import { IPagination } from "../../types/IPagination";

const initialHeroesState: IHeroesState = {
  list: [],
  isDirty: false,
  errorMessage: "",
  isLoading: false,
  pagination: {
    prev: "",
    next: "",
    heroesCount: 0,
  },
};

export const heroesSlice = createSlice({
  name: "heroes",
  initialState: initialHeroesState,
  reducers: {
    addHero: (state: IHeroesState, action: PayloadAction<IHero>) => {
      state = state.isDirty ? state : { ...state, isDirty: true };
      state.list.push(action.payload);

      return state;
    },
    addHeroes: (state: IHeroesState, action: PayloadAction<IHero[]>) => {
      state = state.isDirty ? state : { ...state, isDirty: true };
      state.list = action.payload;

      return state;
    },
    removeHeroByName: (state: IHeroesState, action: PayloadAction<string>) => {
      const name = action.payload;
      state.list = state.list.filter((item) => item.name === name);

      return state;
    },
    setErrorMessage: (state: IHeroesState, action: PayloadAction<string>) => {
      state = state.isDirty ? state : { ...state, isDirty: true };
      state.errorMessage = action.payload;

      return state;
    },
    setIsLoading: (state: IHeroesState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;

      return state;
    },
    setPagination: (
      state: IHeroesState,
      action: PayloadAction<IPagination>
    ) => {
      state.pagination = action.payload;

      return state;
    },
  },
});

export const {
  addHero,
  addHeroes,
  removeHeroByName,
  setErrorMessage,
  setIsLoading,
  setPagination,
} = heroesSlice.actions;

export default heroesSlice.reducer;
