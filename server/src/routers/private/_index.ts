import {Router} from "express"
import userRoute from "./user.route.js"
import researchRoute from "./research.route.js"
const route = Router();

route.use("/user", userRoute)
route.use("/research", researchRoute)

export default route;