import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import MovieService from '../services/movie.service'


export function MovieDetails() {
  const [movie, setMovie] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadMovie()
  }, [])

  async function loadMovie() {
    const movie = await MovieService.loadMovie(params.id)
    const trailer = await MovieService.loadTrailer(movie.Title)
    setMovie(movie)
    setTrailer(trailer)
  }

  if (!movie) return <div className="loading">Loading...</div>

  return (
    <div className="movie-details">
      <div className="movie-card">

      {movie.Poster && movie.Poster !== "N/A" && (
        <img className="movie-poster" src={movie.Poster} alt={movie.Title} />
      )}
        <div className="movie-content">
          <h1 className="movie-title">{movie.Title}</h1>

          <div className="movie-meta">
            <span>📅 {movie.Year}</span>
            <span>⏱ {movie.Runtime}</span>
            <span>🔞 {movie.Rated}</span>
          </div>

          <p className="movie-plot">{movie.Plot}</p>

          <div className="movie-info">
            <p><strong>Released:</strong> {movie.Released}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>IMDb Rating:</strong> ⭐ {movie.imdbRating}</p>
            <Link to={trailer} target="_blank" rel="noopener noreferrer">
              Link to official trailer
            </Link>
          </div>
          <button className='btn-back' onClick={()=>navigate('/movies')}>🔙 Go Back </button>

        </div>
      </div>
    </div>
  )
}
