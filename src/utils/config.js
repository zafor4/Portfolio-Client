import { jwtDecode } from "jwt-decode"

export const baseUrl='https://portfolioserver-v2b4.onrender.com/api'

export const decoded=token=>{
    const user=jwtDecode(token)
    return user
}