import { configureStore } from "@reduxjs/toolkit";
import isLoginReducer from "./slice/isLogged";
import addFavorates  from "./slice/favorates";
// in this store we but all reducer inside key called reducer
export const store = configureStore({
  reducer: {
    isLogged: isLoginReducer,
    favorates: addFavorates,
  },
});
