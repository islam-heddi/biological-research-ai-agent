import { createServer, IncomingMessage, Server, ServerResponse } from "http"
import {Server as SocketIOServer} from "socket.io"
import { createMessage } from "./controller/messages.controller.js"
import { MessageType } from "./types/message.types.js"
import { Express } from "express"
function startSocketServer(app: Express) {
console.log("starting socket server")
const server: Server<typeof IncomingMessage, typeof ServerResponse> = createServer(app)

const SocketMap = new Map<string, string>();// Map to store WebSocket connections with their IDs

const io = new SocketIOServer(server, {
  cors: {
    origin: process.env.VIEW_LINK,
    methods: ["GET", "POST"],
    credentials: true
  }
})


io.on("connection", (socket) => {
  const userId = socket.handshake.query?.userId;
  console.log(userId + " connected")
  SocketMap.set(userId as string, socket.id)

  socket.on("message", async (msg: MessageType) => {
    const reply = await createMessage(msg);
    const socketId = SocketMap.get(msg.userId);
    socket.to(socketId as string).emit("receive-message", reply)
  })

  socket.on("disconnecting", () => {
    for (const [userId, socketId] of SocketMap.entries()) {
      if (socketId === socket.id) {
        SocketMap.delete(userId);
        break;
      }
    }
  });
})
}

export {
  startSocketServer
}