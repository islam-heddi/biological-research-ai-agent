import { cronjobResearch } from "./services/search.service.js"
import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js";
import cookieParser from "cookie-parser"

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cookieParser())
app.use(cors())
connectDb().then(() => {
    cronjobResearch.start() // this will start it immediatly, when the database is established
})

app.get("/", (_req, res) => {
    return res.status(200).send("hello world");
})

app.listen(PORT, () => {
    console.log(`the server is listening ${PORT}`)
})