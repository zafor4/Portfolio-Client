import axios from "axios"
import { baseUrl } from "../utils/config"


export const createArticle=(token,data)=>{
    return axios.post(`${baseUrl}/article`,data,{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })
}

export const getArticles=()=>{
    return axios.get(`${baseUrl}/article`)
}

export const getArticleById=(id)=>{
    return axios.get(`${baseUrl}/article/${id}`)
}

export const deleteArticle=(token,id)=>{
    return axios.delete(`${baseUrl}/article/${id}`,{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })
}