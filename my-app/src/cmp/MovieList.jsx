import MovieService from '../services/movie.service.js'
import {useEffect, useState} from 'react'
import {MoviePreview} from './MoviePreview.jsx'
import { useDispatch, useSelector } from 'react-redux'

export function MovieList(){
    const movies  = useSelector(state=>state.movie.movies)

    if (!movies.length) return <div>No movies to show</div>
    return( 
        <div className='movie-list'>
            <ul className="movie-table">
                {movies.map(movie => (
                <li key={movie.imdbID}>
                    <MoviePreview movie={movie} />
                </li>
                ))}
            </ul>

        </div>
    )
}