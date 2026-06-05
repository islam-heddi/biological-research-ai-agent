import { Router } from "express";
import { createChannel, getChannels, updateChannel } from "../../controller/channels.controller.js";

const router = Router();

router.post("/create", createChannel);
router.patch("/update/:id", updateChannel);
router.get("/", getChannels);

export default router