import type {Request, Response} from "express"
import { Research } from "../model/research.js"
import { ResearchType } from "../types/research.types.js";
import { generateDemontrationByAI } from "../bot/openai.js";
import {numberOfPage, pagination} from "../utils/pagination.js" 

const getResearchs = async (req: Request, res: Response) => {
    const {page} = req.query;
    try {
        const researchs = await Research.find();
        if(page) {
            const pagedElements: ResearchType[] = pagination(parseInt(page as string), researchs)

            const result = {
                researchs: pagedElements,
                pages: numberOfPage(researchs),
                currentPage: page
            }
            return res.status(200).send(result)
        }
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