import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const homeTabsSlice = createSlice({
  name: "homeTab",
  initialState: {
    tabList: [
      {
        name: "Chats",
        isActive: true,
      },
      {
        name: "Contacts",
        isActive: false,
      },
      {
        name: "Calls",
        isActive: false,
      },
    ],
    activeTab: 0,
  },

  reducers: {
    setActiveTab: (state, action: PayloadAction<number>) => {
      state.tabList.forEach((tab) => {
        tab.isActive = false;
      });
      state.tabList[action.payload].isActive = true;
      state.activeTab = action.payload;
    },
  },
});
export const { setActiveTab } = homeTabsSlice.actions;
export default homeTabsSlice.reducer;
