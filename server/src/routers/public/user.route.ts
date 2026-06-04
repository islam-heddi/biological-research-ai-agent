import {login, register} from "../../controller/user.controller.js"
import {Router} from "express"

const route = Router();

route.post("/register", register)
route.post("/login", login)


export default route;