import { useDispatch, useSelector } from 'react-redux'
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import userService from '../services/user.service'
import { setMsg, clearUser } from '../store/userSlice'
import { MovieList } from '../cmp/MovieList'
import MovieService from '../services/movie.service'


export function UserPage(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [userMovies,setUserMovies] = useState([])
    const user = useSelector(state=>state.user)
    useEffect(()=>{
        if(!user.user.fullName) navigate('/register')
        loadUserMovies()
    },[])

    async function loadUserMovies(){
    try{
        const loadedMovies = await MovieService.loadUserMovies(user.user.id)
        setUserMovies(loadedMovies)
    }catch(err){
        console.log(err)
        dispatch(setMsg({ text: "Error loading movies!", condition: false }));
    }}

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
            <section className='user-info'>
                <h1 className='user-name'>Hello {user.user.fullName}</h1>
                <p className='user-email'>{user.user.email}</p>
                <img src={user.user.imgUrl} alt="image of a person " />
                <button className='delete-btn' onClick={()=>onDeleteUser(user.user.id)}>Delete Account</button>
            </section>
            <MovieList movies={userMovies}/>
        </div>
    )
}


