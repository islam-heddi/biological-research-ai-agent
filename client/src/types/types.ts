
type ResearchType = {
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


export  type {
    ResearchType,
    PaginationResponseType
}