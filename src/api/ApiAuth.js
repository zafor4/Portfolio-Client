import axios from "axios";
import { baseUrl } from "../utils/config";


export const signup=(user)=>{
    return axios.post(`${baseUrl}/user/signup`,user,{
        headers:{
            'Content-Type':'application/json'
        }
    })
}

export const login=(user)=>{
    return axios.post(`${baseUrl}/user/login`,user,{
        headers:{
            'Content-Type':'application/json'
        }
    })

}