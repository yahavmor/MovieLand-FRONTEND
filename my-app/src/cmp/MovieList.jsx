import MovieService from '../services/movie.service.js'
import {useEffect, useState} from 'react'
import {MoviePreview} from './MoviePreview.jsx'
import { useDispatch, useSelector } from 'react-redux'
import {NoMovies} from './NoMovies.jsx'

export function MovieList(){
    const movies  = useSelector(state=>state.movie.movies)

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