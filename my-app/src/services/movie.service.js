import axios from 'axios'

const BaseUrl = 'https://www.omdbapi.com/?apikey=17be2e3&t='

const MovieService = {
    loadMovies,
    searchMovie
}

function loadMovies(){
    return movies
}

async function searchMovie(movieName){
    const res = await axios.get(BaseUrl + movieName)
    return res.data
}
export default MovieService

