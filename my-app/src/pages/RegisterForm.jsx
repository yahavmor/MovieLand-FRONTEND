import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMsg, updateUser } from '../../src/store/userSlice.js'
import { useNavigate } from 'react-router-dom'
import userService from '../services/user.service.js'
import { UserMsg } from '../cmp/UserMsg.jsx'


export function RegisterForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData,setFormData] = useState(userService.defaultUser)
    const user = useSelector(state=>state.user)
    
    function handleChange(e){
        const {value,name} = e.target
        setFormData(prev => ({
        ...prev,
        [name]: value
        }))
    }
    
    
    async function handleSubmit(e){
    e.preventDefault();
    const isAllFiled = userService.checkIfAllFilled(formData);
    if (!isAllFiled){
        dispatch(setMsg({ text: "Please fill all fields!", condition: false }));
        return;
    }
    const imgUrl = await userService.getUserImage();
    const updatedUser = { 
        ...formData, 
        imgUrl 
    };
    setFormData(updatedUser);
    dispatch(updateUser(updatedUser));
    dispatch(setMsg({ text: "User Registered!", condition: true }));
    navigate('/');
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
  