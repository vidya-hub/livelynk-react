import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth_state/auth_slice";
import userSlice from "./user_state/user_slice";
import homeTabSlice from "./home_state/home_tab_slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    homeTab: homeTabSlice,
  },
});

export default store;
