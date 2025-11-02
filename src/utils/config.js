import { jwtDecode } from "jwt-decode"

// const dev='http://localhost:3001/api'
// export const baseUrl=dev

export const baseUrl =
  "https://zaforportfolioserver-bcfpgqejc3cad0h7.centralindia-01.azurewebsites.net/api";

export const decoded=token=>{
    const user=jwtDecode(token)
    return user
}