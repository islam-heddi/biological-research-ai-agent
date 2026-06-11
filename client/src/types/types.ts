
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

type ChannelType = {
    createdAt: string;
    name: string; 
    updatedAt: string;
    userId: string; 
    __v: string; 
    _id: string;
}

type MessageType = {
    content: string;
    role: "user" | "system";
    userId?: string;
    channelId?: string;
}

export  type {
    ResearchType,
    PaginationResponseType,
    ResearchWithAi,
    ChannelType,
    MessageType
}