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
  },
});

export const { toggleSidebarMenu } = appSlice.actions;

export default appSlice.reducer;
