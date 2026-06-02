import MovieService from '../services/movie.service.js'
import {useEffect, useState} from 'react'
import {MoviePreview} from './MoviePreview.jsx'
import { useDispatch, useSelector } from 'react-redux'
import {NoMovies} from './NoMovies.jsx'
import { setMsg } from '../store/userSlice.js'

export function MovieList({movies}){
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user)
    console.log(movies[0])
    if (!movies || movies.length === 0) return <NoMovies />
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