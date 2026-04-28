let defaultUser =  {
    fullName:'',
    email:'',
    password:''
}
export const userService = {
    defaultUser,
    checkIfAllFilled
}



function checkIfAllFilled(obj){
    return isAllFilled = Object.values(obj).every(value => value !== "")
}
export default userService