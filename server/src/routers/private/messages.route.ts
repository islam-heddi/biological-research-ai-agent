import { Router } from "express";
import { createMessageREST, getMessages } from "../../controller/messages.controller.js";

const router: Router = Router();


router.get("/:channelId", getMessages)
router.post("/create", createMessageREST)

export default router