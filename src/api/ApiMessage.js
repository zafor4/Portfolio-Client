import axios from "axios"
import { baseUrl } from "../utils/config"



export const sendMessage=(message)=>{
    return axios.post(`${baseUrl}/message`,message)
}

export const getMessage=(token)=>{
    return axios.get(`${baseUrl}/message`,{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })

}