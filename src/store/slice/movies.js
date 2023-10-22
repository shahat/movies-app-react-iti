import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axiosConfig/instance";

export const moviesAction = createAsyncThunk("movies/getAll", async (page) => {
  const res = await instance.get(`/movie/popular?page=${page}`);
  return res.data.results;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: { movies: [] },
  extraReducers: (builder) => {
    //movies action => incase if fullfilled these function will be called
    builder.addCase(moviesAction.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export default moviesSlice.reducer;
