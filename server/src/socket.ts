import { createServer, IncomingMessage, Server, ServerResponse } from "http"
import { app } from "./index.js"
import socketIO from "socket.io"
import { createMessage } from "./controller/messages.controller.js"
import { MessageType } from "./types/message.types.js"

const server: Server<typeof IncomingMessage, typeof ServerResponse> = createServer(app)

const SocketMap = new Map<string, string>();// Map to store WebSocket connections with their IDs

const io = new socketIO.Server(server, {
  cors: {
    origin: process.env.VIEW_LINK,
    methods: ["GET", "POST"]
  }
})

io.on("connection", (socket) => {
  const userId = socket.handshake.query?.userId;
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