import type {Request, Response} from "express"
import { Research } from "../model/research.js"
import { ResearchType } from "../types/research.types.js";
import { generateDemontrationByAI } from "../bot/openai.js";

const getResearchs = async (_req: Request, res: Response) => {
    try {
        const researchs = await Research.find();
        return res.status(200).send(researchs)
    } catch (error: any) {
        return res.status(500).send(error.message)
    }
}

const getRsearchById = async (req: Request, res: Response) => {
    const id = req.params.id;
    if(!id) return res.status(404).send("missing id research");
    try {
        const research: ResearchType | null = await Research.findById(id);
        if(!research) return res.status(400).send("research not found")
        const AiExplanation = await generateDemontrationByAI(research)
        return res.status(200).send({research, AiExplanation})
    } catch (error: any) {
        return res.status(500).send(error.message)
    }
}

export {
    getResearchs,
    getRsearchById
}