import {deconnect} from "../../controller/user.controller.js"
import {Router} from "express"

const route = Router();

route.delete("/deconnect", deconnect)

export default route;