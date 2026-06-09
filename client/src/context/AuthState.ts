import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
        userId: "",
        user: "",
        isAuthed: false,
        email: ""
    }
  },
  reducers: {
    update: (state, action) => {
        state.value.userId = action.payload.userId;
        state.value.user = action.payload.user;
        state.value.isAuthed = action.payload.isAuthed;
        state.value.email = action.payload.email;
    },
    clear: (state) => {
        state.value.userId = "";
        state.value.user = "";
        state.value.isAuthed = false;
        state.value.email = "";
    }
  }
});


export const {update, clear} = authSlice.actions;
export default authSlice.reducer;