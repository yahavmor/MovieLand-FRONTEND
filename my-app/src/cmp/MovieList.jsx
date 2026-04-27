import MovieService from '../services/movie.service.js'
import {useEffect, useState} from 'react'
import {MoviePreview} from './MoviePreview.jsx'
export function MovieList(){
    const [movies,setMovies] = useState([])
    function loadMovies(){
        setMovies(MovieService.loadMovies())
    }
    useEffect(()=>{
        loadMovies()
    },[])
    
    if (!Object.keys(movies).length) return <div>No movies to show</div>
    return(
        <div className='movie-list'>
            <ul className="movie-table">
                {Object.keys(movies).map(id => (
                    <li key={id}>
                    <MoviePreview movie={movies[id]} />
                    </li>
                ))}
            </ul>

        </div>
    )
}