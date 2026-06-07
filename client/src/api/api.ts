import { Axios } from "axios";

const api = new Axios({
    baseURL: import.meta.env.VITE_API_LINK,
    withCredentials: true
})

export {api}