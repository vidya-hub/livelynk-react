import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth_state/auth_slice";
import userSlice from "./user_state/user_slice";
import homeTabSlice from "./home_state/home_tab_slice";
import chatContactSlice from "./home_state/chat_contacts_state";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    homeTab: homeTabSlice,
    chatContactState: chatContactSlice,
  },
});

export default store;
