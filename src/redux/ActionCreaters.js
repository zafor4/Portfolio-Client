import * as actionTypes from '../redux/ActionTypes'
import { getProjectById, getProjects } from '../api/ApiProject'
import { getArticleById, getArticles } from '../api/ApiArticle'

export const updateMode=()=>{
    return {
        type:actionTypes.CHANGE_MODE,
    }
}

export const modeCheck=(mode)=>{
    return {
        type:actionTypes.MODE_CHECK,
        payload:mode
    }

    
}

export const addProject=(projects)=>{
    return{
        type:actionTypes.ADD_PROJECTS,
        payload:projects
    }
}

export const fetchProjects=()=>dispatch=>{
   getProjects()
   .then(res=>{
    dispatch(addProject(res.data))
   })
    
}

export const addArticles=(articles)=>{
    return {
        type:actionTypes.ADD_Articles,
        payload:articles
    }

}

export const fetchArticles=()=>dispatch=>{
    getArticles()
    .then(res=>{
        dispatch(addArticles(res.data))
        
    })
}

export const addIndividualArticle=(article)=>{
    return {
        type:actionTypes.ADD_INDIVIDUAL_Article,
        payload:article
    }
}


export const fetchIndividualArticle=(id)=>(dispatch)=>{
    getArticleById(id)
    .then(res=>{
        dispatch(addIndividualArticle(res.data))
    })
    .catch(err=>console.log(err))
}

export const addIndividualProject=(project)=>{
    return {
        type:actionTypes.ADD_INDIVIDUAL_PROJECT,
        payload:project
    }
}


export const fetchIndividualProject=(id)=>(dispatch)=>{
    getProjectById(id)
    .then(res=>{
        dispatch(addIndividualProject(res.data))
    })
    .catch(err=>console.log(err))
}

export const addMessage=messages=>{
    return{
        type:actionTypes.ADD_MESSAGE,
        payload:messages
    }
}