import axios from 'axios'

const BaseUrl = 'https://www.omdbapi.com/?apikey=17be2e3'

const MovieService = {
    loadMovies,
    searchMovie,
    loadMovie,
    isMovieDuplicate
}
function isMovieDuplicate(movie, movies) {
  return movies.some(m => m.imdbID === movie.imdbID);
}


function loadMovies(){
    return movies
}
async function loadMovie(movieId){
    const res = await axios.get(BaseUrl+'&i='+movieId)
    return res.data
}

async function searchMovie(movieName){
    const res = await axios.get(BaseUrl +'&t='+ movieName)
    return res.data
}
export default MovieService

