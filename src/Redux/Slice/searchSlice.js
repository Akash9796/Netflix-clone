import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search: (state, action) => {
      // console.log(action.payload);
      return action.payload;
    },
  },
});

export const { search } = searchSlice.actions;
export default searchSlice.reducer;
