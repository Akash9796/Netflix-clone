import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slice/authSlice";
import genreReducer from "./Slice/genreSlice";
import movieReducer from "./Slice/movieSlice";
import pageReducer from "./Slice/pageSlice";
import searchReducer from "./Slice/searchSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    genre: genreReducer,
    search: searchReducer,
    page: pageReducer,
    auth: authReducer,
  },
});
