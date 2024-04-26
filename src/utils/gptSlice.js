import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: { showGptserch: false },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptserch = !state.showGptserch;
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
