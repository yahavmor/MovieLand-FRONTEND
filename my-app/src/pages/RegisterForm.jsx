import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../src/store/userSlice.js'
import { useNavigate } from 'react-router-dom'
import userService from '../services/user.service.js'

export function RegisterForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData,setFormData] = useState(userService.defaultUser)

    
    function handleChange(e){
        const {value,name} = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
          }))
        }
    
    async function handleSubmit(e){
        e.preventDefault()
        const isAllFiled = userService.checkIfAllFilled(formData)
        console.log(isAllFiled)
        if (!isAllFiled) return
        const imgUrl = await userService.getUserImage()
        console.log(imgUrl)
        setFormData(prev=>({
            ...prev,
            imgUrl
        }))
        dispatch(updateUser(formData))
        navigate('/')
    }
    return (
            <form className="register-form" onSubmit={(e)=>handleSubmit(e)}>
                <div className="input-bar">
                <label>Full Name:</label>
                <input type="text" name='fullName' placeholder="Enter full name" onChange={(e)=>handleChange(e)} />
                </div>
        
                <div className="input-bar">
                <label>Email:</label>
                <input type="email" name='email' placeholder="Enter email" onChange={(e)=>handleChange(e)} />
                </div>
        
                <div className="input-bar">
                <label>Password:</label>
                <input type="password" name='password' placeholder="Enter password" onChange={(e)=>handleChange(e)} />
                </div>
        
                <button className="register-btn" onSubmit={(e)=>handleSubmit(e)}>Register</button>
            </form>
    )
}
  