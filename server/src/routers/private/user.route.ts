import {deconnect, getAuth, updatePassword, updateProfileEmail, updateProfileName} from "../../controller/user.controller.js"
import {Router} from "express"

const route = Router();

route.delete("/deconnect", deconnect)
route.get("/auth", getAuth)
route.patch("/update-profile-name", updateProfileName)
route.patch("/update-profile-email", updateProfileEmail)
route.patch("/update-password", updatePassword)

export default route;