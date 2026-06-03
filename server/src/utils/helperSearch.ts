import { Research } from "../model/research.js";

const checkExistingResearch = async (name: string): Promise<boolean> => {
    try {
        const research = await Research.find({name})
        return research.length > 0 ? true : false
    } catch (error) {
        throw error
    }
}


export {
    checkExistingResearch
}