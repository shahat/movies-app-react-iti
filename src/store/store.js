import { configureStore } from "@reduxjs/toolkit";
import isLoginReducer from "./slice/isLogged";
import addFavorates from "./slice/favorates";
import languageReducer from "./slice/language";
import moviesReducer from "./slice/movies";
// in this store we but all reducer inside key called reducer
export const store = configureStore({
  reducer: {
    isLogged: isLoginReducer,
    favorates: addFavorates,
    language: languageReducer,
    movies: moviesReducer,
  },
});
