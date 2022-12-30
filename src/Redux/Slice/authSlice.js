import { createSlice } from "@reduxjs/toolkit";


if(typeof(localStorage.getItem("user"))!=='undefined'){
  var  photo = JSON.parse(window.localStorage.getItem("user"));
};
const authSlice = createSlice({
  name: "auth",
  initialState: photo ? true : false,
  reducers: {
    auth: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const { auth } = authSlice.actions;
export default authSlice.reducer;
