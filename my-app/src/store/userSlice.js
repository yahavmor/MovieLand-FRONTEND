import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:{
  fullName: "",
  email: "",
  password: "",
  imgUrl: '',
  id:null},
  msg:{
    text:'',
    condition:true
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action) {
      state.user = action.payload;
    },
    setMsg(state, action) {
      state.msg = { ...state.msg, ...action.payload }
    },
    clearMsg(state) {
      state.msg = { text: "", condition: true }
    },
    clearUser(state) {
      state.user = initialState.user;
    }
  }
})


export const { updateUser, setMsg, clearMsg, clearUser} = userSlice.actions
export default userSlice.reducer
