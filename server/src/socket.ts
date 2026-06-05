import { createServer, IncomingMessage, Server, ServerResponse } from "http"
import { app } from "./index.js"
import { WebSocketServer } from "ws"

const server: Server<typeof IncomingMessage, typeof ServerResponse> = createServer(app)
const wss: WebSocketServer = new WebSocketServer({server});

wss.on('connection', (ws) => {
  console.log('Client connected via WebSocket');

  // Handle incoming messages from the client
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    // Echo the message back to the client
    ws.send(`Server received: ${message}`);
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});