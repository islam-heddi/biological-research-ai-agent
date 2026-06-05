import { Router } from "express";
import { createChannel, deleteChannel, getChannels, updateChannel } from "../../controller/channels.controller.js";

const router = Router();

router.post("/create", createChannel);
router.patch("/update/:id", updateChannel);
router.get("/", getChannels);
router.delete("/:channelId", deleteChannel)

export default router