import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import User from "../../types/user";

const initialState: User = {
  userId: undefined,
  username: "",
  email: undefined,
  roomId: undefined,
  unRequestedUsers: undefined,
  requestedUsers: undefined,
  invitedUsers: undefined,
  acceptedUsers: undefined,
  originalUsers: undefined,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserState: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
    clearUserDetails(state) {
      state.userId = undefined;
      state.username = "";
      state.email = undefined;
      state.roomId = undefined;
      state.unRequestedUsers = undefined;
      state.requestedUsers = undefined;
      state.invitedUsers = undefined;
      state.acceptedUsers = undefined;
      state.originalUsers = undefined;
    },
  },
});
export const { setUserState, clearUserDetails } = userSlice.actions;

export default userSlice.reducer;
