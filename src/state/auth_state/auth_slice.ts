import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: true,
  },

  reducers: {
    toggleIsLogin(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
  },
});
export const { toggleIsLogin } = authSlice.actions;
export default authSlice.reducer;
