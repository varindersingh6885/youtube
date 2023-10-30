import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import bodyBackdropSlice from "./bodyBackdropSlice";

export const appStore = configureStore({
  reducer: {
    app: appSlice,
    bodyBackdrop: bodyBackdropSlice,
  },
});
