import axios from 'axios'

const BASE_USER_URL = `${import.meta.env.VITE_API_URL}/api/user`

export const userService = {
  checkIfAllFilled,
  getUserImage,
  defaultUser,
  deleteUser
}
function defaultUser(){
    return {
        fullName:'',
        email:'',
        password:'',
        imgUrl:'1'
    }
}
async function deleteUser(userId) {
  const res = await axios.delete(BASE_USER_URL + `/${userId}`,{ withCredentials: true });
  return res.data;
}


function checkIfAllFilled(obj, fields) {
  return fields.every(field => obj[field]?.trim() !== "");
}


async function getUserImage() {
  const res = await axios.get('https://randomuser.me/api/');
  return res.data.results[0].picture.large;
}

export default userService