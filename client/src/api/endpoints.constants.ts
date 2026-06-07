
//public
export const LOGIN = "/api/public/user/login"; // post
export const REGISTER = "/api/public/user/register"; //post
//private
export const DECONNECT = "/api/private/user/deconnect"; //delete
//research
export const GET_RESEARCHS = "/api/private/research/"; // get
export const GET_RESEARCH_BY_PAGE = "/api/private/research/?page="; // get
export const GET_RESEARCH_BY_ID = "/api/private/research/"; // dont forget to add the id
//channels
export const GET_CHANNELS = "/api/private/channels/"; // get
export const CREATE_CHANNEL = "/api/private/channels/create"; // post
export const UPDATE_CHANNEL = "/api/private/channels/update/"; // patch param : channel id
export const DELETE_CHANNEL = "/api/private/channels/"; // dont forget to add the channel id
//messages
export const GET_MESSAGES_BY_CHANNEL = "/api/private/messages/"; // dont forget to add the channel id
export const CREATE_MESSAGE = "/api/private/messages/create"; // post