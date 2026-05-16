import axios from 'axios'

const BaseUrl = 'https://www.omdbapi.com/?apikey=17be2e3'
const TrailerApiKey = 'eb6c17a5d4e99a8645ef8d325261f6a7'

const MovieService = {
    loadMovies,
    searchMovie,
    loadMovie,
    isMovieDuplicate,
    isRealMovie,
    loadTrailer
}
async function loadTrailer(movieName){
    const moviesRes = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TrailerApiKey}&query=${movieName}`)
    const TdmbMovie = moviesRes.data.results[0]
    const videosRes = await axios.get(`https://api.themoviedb.org/3/movie/${TdmbMovie.id}/videos?api_key=${TrailerApiKey}`)
    return findMainTrailer(videosRes.data.results)
}
function findMainTrailer(trailers) {
  if (!Array.isArray(trailers) || trailers.length === 0) {
    return null;
  }
  const trailerObj = trailers.find(t =>
    t.name?.toLowerCase().includes("trailer")
  );
  if (!trailerObj) {
    throw new Error("No trailer found");
  }

  return `https://www.youtube.com/watch?v=${trailerObj.key}`;
}

function isMovieDuplicate(movie, movies) {
  return movies.some(m => m.imdbID === movie.imdbID);
}
function isRealMovie(movie){
  return movie.Response === "True";
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

