import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IHero } from "../../types/IHero";
import { IHeroField } from "../../types/IHeroField";

const initialHeroState: IHero = {
  name: "Luke",
  birth_year: "",
  eye_color: "",
  gender: "",
  hair_color: "",
  height: "",
  mass: "",
  skin_color: "",
  homeworld: "",
  films: [],
  species: [],
  starships: [],
  vehicles: [],
  url: "",
  created: "",
  edited: "",
};

export const heroSlice = createSlice({
  name: "hero",
  initialState: initialHeroState,
  reducers: {
    setHeroData: (_, action: PayloadAction<IHero>) => {
      return {
        ...action.payload,
      };
    },
    updateHeroField: (state: IHero, action: PayloadAction<IHeroField>) => {
      const { field, value } = action.payload;

      return {
        ...state,
        [field]: value,
      };
    },
    clearHeroData: () => {
      return initialHeroState;
    },
  },
});

export const { setHeroData, updateHeroField, clearHeroData } =
  heroSlice.actions;

export default heroSlice.reducer;
