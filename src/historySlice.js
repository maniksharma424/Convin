import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "history",
  initialState: {
    history: [],
  },
  reducers: {
    AddtoHistory: (state, action) => {
      state.history.push(action.payload);
    },
    clearHistory: (state, action) => {
      state.history = [];
    },
  },
});

export const { AddtoHistory, clearHistory } = historySlice.actions;
export default historySlice.reducer;
