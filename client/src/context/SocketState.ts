import { createSlice } from "@reduxjs/toolkit";
import type { Socket } from "socket.io-client";

const socketSlice = createSlice({
  name: "socket",
  initialState: {
    value: null as (Socket<any> | null)
  },
  reducers: {
    updateSocket: (state, action) => {
        state.value = action.payload as Socket<any>
    },
    clearSocket: (state) => {
        state.value = null
    }
  }
});


export const {updateSocket, clearSocket} = socketSlice.actions;
export default socketSlice.reducer;