import axios from 'axios'
import {getItemFromLocalStorage, setItemToLocalStorage } from './localStorage.service'

const BASE_AUTH_URL = 'http://localhost:3000/api/auth'
export const authService = {
    signup,
    login,
    getLoggedInUser
}

async function signup(user){
    const res = await axios.post(BASE_AUTH_URL+'/signup',user,{withCredentials:true})  
    const {token , newUser } = res.data
    setItemToLocalStorage('token',token)
    setItemToLocalStorage('user',newUser)
    return newUser
} 
async function login(user){
    const res = await axios.post(BASE_AUTH_URL+'/login',user,{withCredentials:true})  
    const {token , loggedUser } = res.data
    setItemToLocalStorage('token',token)
    setItemToLocalStorage('user',loggedUser)
    return loggedUser
}

async function getLoggedInUser() {
    const token = getItemFromLocalStorage('token')
    if (!token) return null;
    const res = await axios.get(BASE_AUTH_URL + "/loggedUser", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.data;
  }

