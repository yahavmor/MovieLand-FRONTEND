import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:{
    fullName: "",
    email: "",
    password: "",
    imgUrl: '',
  },
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
      state.user = { ...state.user, ...action.payload }
    },
    setMsg(state, action) {
      state.msg = { ...state.msg, ...action.payload }
    },
    clearMsg(state) {
      state.msg = { text: "", condition: true }
    }
  }
})


export const { updateUser, setMsg, clearMsg} = userSlice.actions
export default userSlice.reducer
