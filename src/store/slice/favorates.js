import { createSlice } from "@reduxjs/toolkit";

const addFavorates = createSlice({
  name: "favorates",
  // this is the initial value of your global state
  initialState: { favorates: [] },
  // her is is the compined reducers
  reducers: {
    addFavor: function (state, action) {
      console.log("favorates");
      state.favorates = action.payload;
    },
  },
});

// now you are creating action with the same name of reducer
export const { addFavor } = addFavorates.actions;
export default addFavorates.reducer;

// steps
/* 
        create slice 
         put name to the slice 
         put initial state 
         create reducers
         export action with same name of reducer


  */
