import axios from 'axios'
import { getRandInt } from './utils'

const TDMB_KEY = 'eb6c17a5d4e99a8645ef8d325261f6a7'
const BASE_MOVIE_URL = `${import.meta.env.VITE_API_URL}/api/movie`
ד
const MovieService = {
  searchMovieByName,
  searchMovieById,
  isMovieDuplicate,
  isRealMovie,
  getTrailer,
  explorMovie,
  addToLikedMovies,
  loadUserMovies,
  removeMovie
}
async function loadUserMovies(userId) {
  const res = await axios.get(`${BASE_MOVIE_URL}/${userId}`);
  return res.data;
}
async function removeMovie(movie) {
  const res = await axios.delete(`${BASE_MOVIE_URL}/${movie.title}`)
  return res.data
}

async function addToLikedMovies(movie, userId) {
  const movieShort = {
    title: movie.title,
    overview: movie.overview,
    tagline: movie.tagline,
    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    date: movie.release_date?.slice(0,4),
    rating: movie.vote_average,
    id:movie.id,
    userId
  }
  const res = await axios.post(BASE_MOVIE_URL + '/like', movieShort)
  return res.data
}

async function searchMovieById(movieId) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TDMB_KEY}&language=en-US`
  );
  return res.data;
}
async function searchMovieByName(movieName) {
  const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TDMB_KEY}&query=${movieName}&language=en-US`);
  return res.data.results[0]; 
}
async function getTrailers(movie) {
  const videosRes = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${TDMB_KEY}`)
  return videosRes.data.results
}
async function getTrailer(movieName){
  const tdmbMovie = await searchMovieByName(movieName) 
  const trailers = await getTrailers(tdmbMovie)
  return await findMainTrailer(trailers)
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
async function explorMovie() {
  const randPage = getRandInt(1, 500);
  const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${TDMB_KEY}&page=${randPage}`);
  const movies = res.data.results;
  const randIndex = getRandInt(0, movies.length - 1);
  return movies[randIndex];
}

    
function isMovieDuplicate(movie, movies) {
  return movies.some(m => m.id === movie.id);
}
function isRealMovie(movie) {
  return movie && movie.id;
}
export default MovieService

