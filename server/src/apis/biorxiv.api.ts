import type { BiorxivSchema } from "../types/api.types.js";

const getDataFromBiorxiv = async (): Promise<BiorxivSchema> => {
    try {
        const fetchedData = await fetch("https://api.biorxiv.org/details/biorxiv/7d")
        const data : BiorxivSchema = await fetchedData.json();

        return data;
    } catch (error) {
        throw error
    }
}


export {
    getDataFromBiorxiv
}