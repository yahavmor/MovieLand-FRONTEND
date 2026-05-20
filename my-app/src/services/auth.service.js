import axios from 'axios'

const BASE_AUTH_URL = 'http://localhost:3000/api/auth'
export const authService = {
    signup
}

async function signup(user){
    const newUser = await axios.post(BASE_AUTH_URL+'/signup',user,{withCredentials:true})  
    return newUser.data
} 
async function login(user){
    const newUser = await axios.post(BASE_AUTH_URL+'/signup',user,{withCredentials:true})  
    return newUser.data
} 
