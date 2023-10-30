import { createSlice } from "@reduxjs/toolkit";

const bodyBackdropSlice = createSlice({
  name: "bodyBackdrop",
  initialState: {
    isVisible: false,
    onBackdropClick: () => {},
  },
  reducers: {
    toggleBodyBackdrop: (state, action) => {
      state.isVisible = !state.isVisible;
      if (action?.payload?.execute) {
        action.payload.execute();
      }
    },
    openBodyBackdrop: (state) => {
      state.isVisible = true;
    },
    closeBodyBackdrop: (state) => {
      state.isVisible = false;
    },
    setBackdropClickHandler: (state, action) => {
      state.onBackdropClick = action?.payload?.handler;
    },
  },
});

export const {
  toggleBodyBackdrop,
  closeBodyBackdrop,
  openBodyBackdrop,
  setBackdropClickHandler,
} = bodyBackdropSlice.actions;

export default bodyBackdropSlice.reducer;
