import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMsg, updateUser } from '../../src/store/userSlice.js'
import { useNavigate } from 'react-router-dom'
import userService from '../services/user.service.js'
import { UserMsg } from '../cmp/UserMsg.jsx'
import { authService } from '../services/auth.service.js'



export function RegisterForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData,setFormData] = useState(userService.defaultUser)
    const [signup,setSignup] = useState(false)
    const user = useSelector(state=>state.user)
    
    function handleChange(e){
        const {value,name} = e.target
        setFormData(prev => ({
        ...prev,
        [name]: value
        }))
    }
    
    
    async function handleSubmit(e) {
    e.preventDefault();
    const isAllFiled = signup
        ? userService.checkIfAllFilled(formData, ["fullName", "email", "password"])
        : userService.checkIfAllFilled(formData, ["email", "password"]);
    if (!isAllFiled) {
        dispatch(setMsg({ text: "Please fill all fields!", condition: false }));
        return;
    }
    try {
        let loggedInUser;

        if (signup) {
        const imgUrl = await userService.getUserImage();
        const updatedUser = { ...formData, imgUrl };
        loggedInUser = await authService.signup(updatedUser);
        dispatch(setMsg({ text: `${loggedInUser.fullName} has been Registered!`, condition: true }));
        } else {
        const { email, password } = formData;
        loggedInUser = await authService.login({ email, password });
        dispatch(setMsg({ text: `Welcome back ${loggedInUser.fullName}!`, condition: true }));
        }
        dispatch(updateUser(loggedInUser));
        navigate('/');
    } catch (err) {
        dispatch(setMsg({ text: "Invalid credentials", condition: false }));
    }}
    return (
        <>
            <form className="register-form" onSubmit={(e)=>handleSubmit(e)}>

                {signup&&<div className="input-bar">
                <label>Full Name:</label>
                <input type="text" name='fullName' placeholder="Enter full name" onChange={(e)=>handleChange(e)} />
                </div>}
        
                <div className="input-bar">
                <label>Email:</label>
                <input type="email" name='email' placeholder="Enter email" onChange={(e)=>handleChange(e)} />
                </div>
        
                <div className="input-bar">
                <label>Password:</label>
                <input type="password" name='password' placeholder="Enter password" onChange={(e)=>handleChange(e)} />
                </div>
        
                {signup?
                <button className="register-btn"
                onSubmit={(e)=>handleSubmit(e)}>Register</button>:
                <button className="register-btn"
                >Login</button>}
            </form>



            <div className='action-wrapper'>
            {signup ? (
                <>
                <p>Already have an account?</p>
                <button className="auth-btn" onClick={()=>setSignup(false)}>Login</button>
                </>
            ) : (
                <>
                <p>Don't have an account?</p>
                <button className="auth-btn" onClick={()=>setSignup(true)}>Signup</button>
                </>
            )}
            </div>
        </>
    )
}
  