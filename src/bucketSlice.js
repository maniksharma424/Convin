import { createSlice } from "@reduxjs/toolkit";

const bucketSice = createSlice({
  name: "bucket",
  initialState: {
    bucket: [1],
    toMoveVideoData: [],
  },
  reducers: {
    setItem: (state, action) => {
      state.bucket = [action.payload];
    },
    setMoveVideoData: (state, action) => {
      state.toMoveVideoData = [action.payload];
    },
  },
});

export const { setItem, setMoveVideoData } = bucketSice.actions;
export default bucketSice.reducer;
