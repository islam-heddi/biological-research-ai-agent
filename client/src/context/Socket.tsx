import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { io } from "socket.io-client";
function Socket() {
  const userId = useSelector((state: any) => state.auth.value.userId);
  useEffect(() => {

    const socket = io(import.meta.env.VITE_API_LINK, {
      withCredentials: true,
      query: {
        userId: userId
      }
    })
    socket.on("connection", () => {
        console.log("user connected")
    })
    return () => {
      socket.disconnect();
      console.log("socket disconnected");
    }
  },[])
  return (
    <Outlet />

  )
}

export default Socket