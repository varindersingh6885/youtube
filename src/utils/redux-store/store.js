import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSearchQuerySlice from "./videoSearchQuerySlice";

export const appStore = configureStore({
  reducer: {
    app: appSlice,
    videoSearchQuery: videoSearchQuerySlice,
  },
});
