import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import MovieService from '../services/movie.service'
import { useDispatch, useSelector } from 'react-redux'
import { setMsg } from '../store/userSlice'


export function MovieDetails() {
  const [movie, setMovie] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userClickedAddMovie,setUserClickedAddMovie] = useState(true)
  const [likedMovies, setLikedMovies] = useState([])
  const user = useSelector(state=>state.user)
  const alreadyLiked = movie ? likedMovies.some(m => m.id === movie.id) : false

  useEffect(() => {
    loadMovie()
    loadUserLikedMovies()
  }, [])

  async function loadUserLikedMovies() {
    if (!user.user.id) return
    const movies = await MovieService.loadUserMovies(user.user.id)
    setLikedMovies(movies)
  }


  async function loadMovie() {
    try {
      const movie = await MovieService.searchMovieByName(params.title)
      setMovie(movie)

      try {
        const trailer = await MovieService.getTrailer(movie.title)
        setTrailer(trailer)
      } catch (err) {
        console.warn("Trailer not found:", err)
        setTrailer(null)
      }

      dispatch(setMsg({ text: "Movie has been loaded", condition: true }))
    } 
    catch (err) {
      console.error(err)
      dispatch(setMsg({ text: "Movie has not been loaded", condition: false }))
    }
  }
  async function addToLikedMovies(movie){
    if(!user.user.id) return dispatch(setMsg({ text: "Please login!", condition: false }));
    try{
      const likedMovie = await MovieService.addToLikedMovies(movie,user.user.id)
      dispatch(setMsg({ text: "Movie added successfully!", condition: true }));
      setUserClickedAddMovie(false)
    }catch(err){
      console.log(err)
      dispatch(setMsg({ text: "Movie not added", condition: false }));
    }
  }

  if (!movie) return <div className="loading">Loading...</div>

  return (
    <div className="movie-details">
      <div className="movie-card">

        {movie.poster_path && (
          <img 
            className="movie-poster" 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title} 
          />
        )}

        <div className="movie-content">
          <h1 className="movie-title">{movie.title}</h1>

          <div className="movie-meta">
            <span> {movie.release_date?.slice(0,4)}📅</span>
            <span> {movie.vote_average}⭐</span>
            <span> {movie.popularity}🔥</span>
          </div>

          <p className="movie-plot">{movie.overview}</p>

          <div className="movie-info">
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Rating:</strong> {movie.vote_average}</p>
            <p><strong>Votes:</strong> {movie.vote_count}</p>

            {trailer && (
              <Link className='trailer-link' to={trailer} target="_blank">
                Watch Trailer
              </Link>
            )}
            {!alreadyLiked && (
              <button className='btn-like' onClick={() => addToLikedMovies(movie)}>
                Add to Watch list
              </button>
            )}
          </div>
            <button className='btn-back' onClick={() => navigate(-1)}>
              🔙 Go Back
            </button>
        </div>
      </div>
    </div>
  )
}
