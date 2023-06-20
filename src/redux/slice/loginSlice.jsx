import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "Login",
  initialState: {
    login: localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : null,
  },
  reducers: {
    LoginUser: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const { LoginUser } = loginSlice.actions;
export default loginSlice.reducer;
