import { createSlice } from "@reduxjs/toolkit";

const changeLogIn = createSlice({
  name: "language",
  // this is the initial value of your global state
  initialState: { isLogged: false },
  // her is is the compined reducers
  reducers: {
    logIn: function (state, action) {
      console.log("acccccc");
      state.isLogged = action.payload;
    },
  },
});

// now you are creating action with the same name of reducer
export const { logIn } = changeLogIn.actions;
export default changeLogIn.reducer;
