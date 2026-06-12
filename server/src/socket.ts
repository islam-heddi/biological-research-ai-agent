import { Server as SocketIOServer } from "socket.io"
import { createMessage } from "./controller/messages.controller.js"
import { MessageType } from "./types/message.types.js"
import type http from "http"

function startSocketServer(server: http.Server) {
  console.log("starting socket server")

  const SocketMap = new Map<string, string>() // Map to store WebSocket connections with their IDs
  const io = new SocketIOServer(server, {
    cors: {
      origin: process.env.VIEW_LINK,
      methods: ["GET", "POST"],
      credentials: true
    }
  })

  io.on("connection", (socket) => {
    const userId = socket.handshake.query?.userId
    console.log(userId + " connected")
    SocketMap.set(userId as string, socket.id)

    socket.on("message", async (msg: MessageType) => {
      const reply = await createMessage(msg)
      const socketId = SocketMap.get(msg.userId)
      const payload = reply.AIReply ?? reply
      if (socketId) {
        io.to(socketId as string).emit("receive-message", payload)
      } else {
        socket.emit("receive-message", payload)
      }
    })

    socket.on("disconnecting", () => {
      for (const [userId, socketId] of SocketMap.entries()) {
        if (socketId === socket.id) {
          SocketMap.delete(userId)
          break
        }
      }
    })
  })
}

export { startSocketServer }
