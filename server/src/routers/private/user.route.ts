import {deconnect, getAuth} from "../../controller/user.controller.js"
import {Router} from "express"

const route = Router();

route.delete("/deconnect", deconnect)
route.get("/auth", getAuth)

export default route;