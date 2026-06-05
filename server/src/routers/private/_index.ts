import {Router} from "express"
import userRoute from "./user.route.js"
import researchRoute from "./research.route.js"
import channelsRoute from "./channels.route.js"
import messagesRoute from "./messages.route.js"
const route = Router();

route.use("/user", userRoute)
route.use("/research", researchRoute)
route.use("/channels", channelsRoute)
route.use("/messages", messagesRoute)

export default route;