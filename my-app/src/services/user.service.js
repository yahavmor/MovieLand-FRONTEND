import axios from 'axios'

let defaultUser =  {
    fullName:'',
    email:'',
    password:'',
    imgUrl:''
}
export const userService = {
    defaultUser,
    checkIfAllFilled,
    getUserImage
}



function checkIfAllFilled(obj){
    return Object.values(obj).every(value => value !== "")
}

async function getUserImage(){
    const imgUrl = await axios.get('https://randomuser.me/api/')
    return imgUrl
}
export default userService