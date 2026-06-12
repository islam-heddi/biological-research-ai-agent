import { cronjobResearch } from "./services/search.service.js"
import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import http from "http"
import { connectDb } from "./config/db.js"
import cookieParser from "cookie-parser"
import apiRouter from "./routers/index.js"
import { startSocketServer } from "./socket.js"

const app = express()
const PORT = process.env.PORT || 5000
const server = http.createServer(app)

app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: process.env.VIEW_LINK,
    methods: ["POST", "GET", "PATCH", "PUT", "DELETE"],
    credentials: true
  })
)
app.use("/api/", apiRouter)
connectDb().then(() => {
  cronjobResearch.start() // this will start it immediatly, when the database is established
})

app.get("/", (_req, res) => {
  return res.status(200).send("hello world")
})

server.listen(PORT, () => {
  console.log(`the server is listening ${PORT}`)
  startSocketServer(server)
})

export { app }
