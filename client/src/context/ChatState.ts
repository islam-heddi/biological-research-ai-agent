import { createSlice } from "@reduxjs/toolkit";
import type { MessageType } from "../types/types";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    value: [] as MessageType[]
  },
  reducers: {
    updateChat: (state, action) => {
        state.value = action.payload
    },
    addMsg: (state, action) => {
        state.value.push(action.payload)
    },
    clearChat: (state) => {
        state.value = []
    }
  }
});


export const {updateChat, clearChat, addMsg} = chatSlice.actions;
export default chatSlice.reducer;