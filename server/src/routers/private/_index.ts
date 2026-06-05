import {Router} from "express"
import userRoute from "./user.route.js"
import researchRoute from "./research.route.js"
import channelsRoute from "./channels.route.js"
const route = Router();

route.use("/user", userRoute)
route.use("/research", researchRoute)
route.use("/channels", channelsRoute)

export default route;