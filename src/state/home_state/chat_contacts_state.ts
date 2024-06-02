import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Contact from "../../types/contact";

const chatContactsSlice = createSlice({
  name: "chatContactsSlice",
  initialState: {
    chatContacts: {},
  } as {
    chatContacts: { [key: string]: Contact };
  },

  reducers: {
    setChatContactsState: (state, action: PayloadAction<Contact[]>) => {
      action.payload.forEach((contact) => {
        const contactId = contact.contactId;
        if (contactId && !(contactId in state.chatContacts)) {
          state.chatContacts[contactId] = contact;
        }
      });
    },
  },
});
export const { setChatContactsState } = chatContactsSlice.actions;
export default chatContactsSlice.reducer;
