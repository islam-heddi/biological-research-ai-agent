import {getResearchs, getRsearchById} from "../../controller/research.controller.js"
import { Router } from "express"

const route = Router();

route.get("/", getResearchs);
route.get("/:id", getRsearchById);

export default route