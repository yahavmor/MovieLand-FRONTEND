import { getRandInt } from "../services/utils"
import { useNavigate } from 'react-router-dom'

export function MoviePreview({ movie }) {
  const navigate = useNavigate()
  const DEFAULT_POSTER = "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"

  return (
    <div 
      className='movie-preview' 
      onClick={() => navigate(`/movies/${movie.id}`)}
    >
      <h5 className='movie-header'>{movie.title}</h5>

      <img
        src={
          movie.poster_path 
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
            : DEFAULT_POSTER
        }
        alt={movie.title}
      />

      <div className="movie-info">
        <p className="movie-rating">⭐ Rating: {movie.vote_average}</p>

        <p className='movie-date'>
          Release Date: {movie.release_date}
        </p>

        <p className="movie-plot">
          {movie.overview?.length > 120 
            ? movie.overview.slice(0, 120) + "..." 
            : movie.overview}
        </p>
      </div>
    </div>
  )
}
