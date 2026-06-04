import {OpenAI} from "openai";
import type { ResearchType } from "../types/research.types.js";

const generateMessage = async (prompt: string, biologicalData: ResearchType) => {
    try {
        const openai = new OpenAI({
            baseURL: "https://generativelanguage.googleapis.com/v1beta/openai",
            apiKey: process.env.GEMINI_API_KEY
        }) 
        openai.chat.completions.create()
    } catch (error) {
        throw error
    }
}