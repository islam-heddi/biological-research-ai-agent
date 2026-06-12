import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { io } from "socket.io-client";
import { clearSocket, updateSocket } from "./SocketState";
import { addMsg } from "./ChatState";
import type { MessageType } from "../types/types";
import { updateThink } from "./ThinkState";
function Socket() {
  const userId = useSelector((state: any) => state.auth.value.userId);
  const dispatch = useDispatch();
  useEffect(() => {

    const socket = io(import.meta.env.VITE_API_LINK, {
      withCredentials: true,
      query: {
        userId: userId
      }
    })
    dispatch(updateSocket(socket))
    socket.on("connect", () => {
      console.log("user connected")
    })
    socket.on("connect_error", (error) => {
      console.error("socket connect error:", error)
    })
    socket.on("receive-message", (message: MessageType) => {
      console.log(message)
      dispatch(addMsg(message))
      dispatch(updateThink(false))
    })

    return () => {
      socket.disconnect()
      console.log("socket disconnected")
      dispatch(clearSocket())
    }
  }, [userId])
  return (
    <Outlet />

  )
}

export default Socket