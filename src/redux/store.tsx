import { configureStore } from "@reduxjs/toolkit";
import heroesReducer from "./slices/heroes";
import heroReducer from "./slices/hero";

const store = configureStore({
  reducer: {
    hero: heroReducer,
    heroes: heroesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
