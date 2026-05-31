import { useDispatch, useSelector } from 'react-redux'
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import userService from '../services/user.service'
import { setMsg, clearUser } from '../store/userSlice'


export function UserPage(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user)
    useEffect(()=>{
        if(!user.user.fullName) navigate('/register')
    },[])
    async function onDeleteUser(userId){
        try{
            const deletedUser = await userService.deleteUser(userId)
            dispatch(clearUser())
            dispatch(setMsg({ text: "User deleted successfully!", condition: true }));
            navigate('/')

        }catch(err){
            console.log(err)
            dispatch(setMsg({ text: "User doesn't deleted!", condition: false }));
            
        }
    }

    return(
        <div className='user-page'>
            <h1 className='user-name'>Hello {user.user.fullName}</h1>
            <p className='user-email'>{user.user.email}</p>
            <img src={user.user.imgUrl} alt="image of a person " />
            <button onClick={()=>onDeleteUser(user.user.id)}>Delete Account</button>
        </div>
    )
}