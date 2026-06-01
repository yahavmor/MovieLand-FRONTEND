import MovieService from '../services/movie.service.js'
import {useEffect, useState} from 'react'
import {MoviePreview} from './MoviePreview.jsx'
import { useDispatch, useSelector } from 'react-redux'
import {NoMovies} from './NoMovies.jsx'
import { setMsg } from '../store/userSlice.js'

export function MovieList(){
    const dispatch = useDispatch()
    const [movies,setMovies] = useState([])
    const user = useSelector(state=>state.user)
    useEffect(()=>{
        loadUserMovies()
    },[])
    async function loadUserMovies(){
            if (!user?.id) return dispatch(setMsg({ text: "Please Signup!", condition: false }))
        try{
            const loadedMovies = await MovieService.loadUserMovies(user.user.id)
            setMovies(loadedMovies)
            dispatch(setMsg({ text: "Movies loaded successfully!", condition: true }));
        }catch(err){
            console.log(err)
            dispatch(setMsg({ text: "Error loading movies!", condition: false }));
        }

    }
    if (!movies.length) return <NoMovies/>
    return( 
        <div className='movie-list'>
            <ul className="movie-table">
                {movies.map(movie => (
                <li key={movie.id}>
                    <MoviePreview movie={movie} />
                </li>
                ))}
            </ul>
        </div>
    )
}