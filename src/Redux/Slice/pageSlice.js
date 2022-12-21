import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: 1,
  reducers: {
    page: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const { page } = pageSlice.actions;
export default pageSlice.reducer;
