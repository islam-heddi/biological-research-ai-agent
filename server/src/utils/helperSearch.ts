import { Research } from "../model/research.js";

const checkExistingResearch = async (name: string): Promise<boolean> => {
    try {
        const research = await Research.find({name})
        if(!research) return false;
        return true;
        
    } catch (error) {
        throw error
    }
}


export {
    checkExistingResearch
}