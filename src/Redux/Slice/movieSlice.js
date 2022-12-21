import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movie",
  initialState: {},
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});
console.log("movieSlice");
export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
