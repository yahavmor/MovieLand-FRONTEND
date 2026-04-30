import { useSelector } from 'react-redux'
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'


export function UserPage(){
    const navigate = useNavigate()
    const user = useSelector(state=>state.user)
    useEffect(()=>{
        if(!user.fullName) navigate('/register')
    },[])

    return(
        <div className='user-page'>
            <h1 className='user-name'>Hello {user.fullName}</h1>
            <p className='user-email'>{user.email}</p>
            <img src={user.imgUrl} alt="image of a person " />
        </div>
    )
}