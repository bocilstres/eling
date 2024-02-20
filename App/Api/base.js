import axios from "axios";

const base = axios.create({
    baseURL: "https://54bc-103-165-227-178.ngrok-free.app",
    responseType:'json',
    withCredentials: true,
})

export default base;