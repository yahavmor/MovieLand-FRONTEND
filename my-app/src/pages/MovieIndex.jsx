import { MovieList } from "../cmp/MovieList.jsx";
import { MovieSearchBar } from "../cmp/MovieSearchBar.jsx";



export function MovieIndex(){

    return(
        <div className='movie-index'>
            <MovieSearchBar/>
            <MovieList/>
        </div>
    )
}