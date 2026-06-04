import {OpenAI} from "openai";
import type { ResearchType } from "../types/research.types.js";
import { OpenAiChats } from "../types/ai.types.js";

const generateMessage = async (prompt: string, biologicalData: ResearchType[], historyMessages: OpenAiChats[]) => {
    if(prompt.length < 1) return "please put a prompt to start";
    const AIRole = `you are a biological assistant, and you have to answer and to discuss about biological field.
        -you have the latest news trend which are in the JSON string below:
        ${biologicalData.toString()}

        -so try to keep answer and show them the latest trend.
        -answer to all the question that are have relationship with this field.
        -do not answer question that are not in this field, and keep replying that you cant assisst about that.
    `;

    const messages: OpenAiChats[] = [{
            role: "system",
            content: AIRole
        },
        ...historyMessages,
        {
            role: "user",
            content: prompt
        }
    ]

    try {
        const openai = new OpenAI({
            baseURL: "https://generativelanguage.googleapis.com/v1beta/openai",
            apiKey: process.env.GEMINI_API_KEY
        }) 
        const chat = await openai.chat.completions.create({
            messages: messages,
            model: 'gemini-2.5-flash', 
        })

        return chat.choices[0]?.message.content;
    } catch (error) {
        throw error
    }
}

const generateDemontrationByAI = async (biologicalData: ResearchType) => {
    if(prompt.length < 1) return "please put a prompt to start";
    const AIRole = `you are a biological assistant, and you have to answer and to discuss about biological field.
        -you have this biological data news which is in the JSON string below:
        ${biologicalData.toString()}
        -try to give a demontration according to the given biological research briefly
    `;

    const messages: OpenAiChats[] = [{
            role: "system",
            content: AIRole
        }
    ]

    try {
        const openai = new OpenAI({
            baseURL: "https://generativelanguage.googleapis.com/v1beta/openai",
            apiKey: process.env.GEMINI_API_KEY
        }) 
        const chat = await openai.chat.completions.create({
            messages: messages,
            model: 'gemini-2.5-flash', 
        })

        return chat.choices[0]?.message.content;
    } catch (error) {
        throw error
    }
}

export {
    generateMessage,
    generateDemontrationByAI
}