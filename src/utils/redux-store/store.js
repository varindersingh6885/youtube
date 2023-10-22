import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

export const appStore = configureStore({
  reducer: {
    app: appSlice,
  },
});
