import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidebarMenuOpen: true,
  },
  reducers: {
    toggleSidebarMenu: (state) => {
      state.isSidebarMenuOpen = !state.isSidebarMenuOpen;
    },
    closeSidebarMenu: (state) => {
      state.isSidebarMenuOpen = false;
    },
  },
});

export const { toggleSidebarMenu, closeSidebarMenu } = appSlice.actions;

export default appSlice.reducer;
