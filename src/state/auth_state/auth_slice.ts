import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: true,
    isLoginLoading: false,
  },

  reducers: {
    toggleIsLogin(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
    toggleIsLoginLoading(state, action: PayloadAction<boolean>) {
      state.isLoginLoading = action.payload;
    },
  },
});
export const { toggleIsLogin, toggleIsLoginLoading } = authSlice.actions;
export default authSlice.reducer;
