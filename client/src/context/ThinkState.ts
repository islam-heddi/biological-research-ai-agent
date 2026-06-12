import { createSlice } from "@reduxjs/toolkit";

const thinkSlice = createSlice({
  name: "think",
  initialState: {
    value: false
  },
  reducers: {
    updateThink: (state, action) => {
        state.value = action.payload
    },
    clearThink: (state) => {
        state.value = false
    }
  }
});


export const {updateThink, clearThink} = thinkSlice.actions;
export default thinkSlice.reducer;