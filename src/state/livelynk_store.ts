import { configureStore } from "@reduxjs/toolkit";
import authRouter from "./auth_state/auth_slice";
import userRouter from "./user_state/user_slice";

const store = configureStore({
  reducer: {
    auth: authRouter,
    user: userRouter,
  },
});

export default store;
