import { login, signup } from '../api/ApiAuth'
import * as actionTypes from '../redux/ActionTypes'
import { decoded } from '../utils/config'

export const authSuccess=(token,user)=>{
    return {
        type:actionTypes.AUTH_SUCCESS,
        payload:{
            token:token,
            user:user
        }
    }
}

export const auth=(name,email,password,mode)=>dispatch=>{

    const signupData={
        name:name,
        email:email,
        password:password
    }
    const loginData={
        email:email,
        password:password
    }
 


    if (mode==='signup'){
        signup(signupData)
        .then(res=>{
            localStorage.setItem('token',res.data.token)
            const user=decoded(res.data.token)
            dispatch(authSuccess(res.data.token,user))
  
        })
        .catch(err=>console.log(err))
    }
    else if (mode ==='login'){
        login(loginData)
        .then(res=>{
            localStorage.setItem('token',res.data.token)
            const user=decoded(res.data.token)
            dispatch(authSuccess(res.data.token,user))
  
        })
        .catch(err=>console.log(err))
    }
}


export const logout=()=>{
    return {
        type:actionTypes.AUTH_LOGOUT
    }
}

export const authCheck=()=>dispatch=>{
    const token = localStorage.getItem('token');
    if (!token) {
        dispatch(logout());
    } else {
        const decodedToken = decoded(token);
        const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds
        

        // Check if the token has expired
        if (new Date() >= new Date(expirationTime)) {
            dispatch(logout());
        } else {
           
            dispatch(authSuccess(token, decodedToken));
        }
    }
}