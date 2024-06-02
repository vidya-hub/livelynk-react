import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Contact from "../../types/contact";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    invitedContacts: {},
    requestedContacts: {},
    acceptedContacts: {},
    unRequestedContacts: {},
  } as {
    invitedContacts: { [key: string]: Contact };
    requestedContacts: { [key: string]: Contact };
    acceptedContacts: { [key: string]: Contact };
    unRequestedContacts: { [key: string]: Contact };
  },

  reducers: {
    addInvitedContact: (state, action: PayloadAction<Contact[]>) => {
      action.payload.forEach((contact) => {
        const contactId = contact.contactId;
        if (contactId && !(contactId in state.invitedContacts)) {
          state.invitedContacts[contactId] = contact;
        }
      });
    },
    addRequestedContact: (state, action: PayloadAction<Contact[]>) => {
      action.payload.forEach((contact) => {
        const contactId = contact.contactId;
        if (contactId && !(contactId in state.requestedContacts)) {
          state.requestedContacts[contactId] = contact;
        }
      });
    },
    addAcceptedContact: (state, action: PayloadAction<Contact[]>) => {
      action.payload.forEach((contact) => {
        const contactId = contact.contactId;
        if (contactId && !(contactId in state.acceptedContacts)) {
          state.acceptedContacts[contactId] = contact;
        }
      });
    },
    addUnRequestedContact: (state, action: PayloadAction<Contact[]>) => {
      action.payload.forEach((contact) => {
        const contactId = contact.contactId;
        if (contactId && !(contactId in state.unRequestedContacts)) {
          state.unRequestedContacts[contactId] = contact;
        }
      });
    },
  },
});
export const {
  addAcceptedContact,
  addInvitedContact,
  addRequestedContact,
  addUnRequestedContact,
} = contactsSlice.actions;
export default contactsSlice.reducer;
