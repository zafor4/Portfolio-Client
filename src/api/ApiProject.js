import axios from "axios"
import { baseUrl } from "../utils/config"

export const createProject=(token,data)=>{
    return axios.post(`${baseUrl}/project`,data,{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })

}

export const getProjects=()=>{
    return axios.get(`${baseUrl}/project`)
}

export const deleteProject=(token,id)=>{
    return axios.delete(`${baseUrl}/project/${id}`,{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })
}

export const getProjectById=(id)=>{
    return axios.get(`${baseUrl}/project/${id}`)
}

export const updateProjectHighlighted=(token,id,highlighted)=>{
    return axios.put(`${baseUrl}/project/${id}`,{highlighted},{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })
}