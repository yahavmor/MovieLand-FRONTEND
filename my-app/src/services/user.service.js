import axios from 'axios'


export const userService = {
    checkIfAllFilled,
    getUserImage,
    defaultUser
}
function defaultUser(){
    return {
        fullName:'',
        email:'',
        password:'',
        imgUrl:'1'
    }
}

function checkIfAllFilled(obj){
  if (!obj) return false;
  return Object.values(obj).every(value => value.trim() !== "");
}


async function getUserImage() {
  const res = await axios.get('https://randomuser.me/api/');
  return res.data.results[0].picture.large;
}

export default userService