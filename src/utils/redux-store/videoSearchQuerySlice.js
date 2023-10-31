import { createSlice } from "@reduxjs/toolkit";

const videoSearchQuerySlice = createSlice({
  initialState: {
    query: "",
  },
  name: "videoSearchQuery",
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload.query;
    },
  },
});

export const { setSearchQuery } = videoSearchQuerySlice.actions;

export default videoSearchQuerySlice.reducer;
