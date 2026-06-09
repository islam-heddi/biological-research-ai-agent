
type ResearchType = {
    _id?: string;
    name: string;
    url?: string;
    authors?: string;
    abstractResearch?: string;
    dateResearch?: Date;
}

type PaginationResponseType = {
    currentPage: string;
    pages: string;
    researchs: ResearchType[] 
}

type ResearchWithAi = {
    AiExplanation: string; 
    research: ResearchType;
}


export  type {
    ResearchType,
    PaginationResponseType,
    ResearchWithAi
}