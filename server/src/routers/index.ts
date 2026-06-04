import {Router} from "express"
import {verifyToken} from "../middlewares/verifyToken.js"


const route = Router();

route.use("/public", (await import("./public/_index.js")).default)
route.use("/private", verifyToken, (await import("./private/_index.js")).default)

export default route;