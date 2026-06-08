import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
        userId: "",
        user: "",
        isAuthed: false
    }
  },
  reducers: {
    update: (state, action) => {
        state.value.userId = action.payload.userId;
        state.value.user = action.payload.user;
        state.value.isAuthed = action.payload.isAuthed;
    }
  }
});


export const {update} = authSlice.actions;
export default authSlice.reducer;