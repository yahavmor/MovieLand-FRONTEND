import { getRandInt } from "../services/utils"
import { useNavigate } from 'react-router-dom'




export function MoviePreview({ movie }) {
    const navigate = useNavigate()
    const DEFAULT_POSTER ="https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";


    return (
      <div className='movie-preview' onClick={() => navigate(`/movies/${movie.imdbID}`)}>
        <h5 className='movie-header'>{movie.Title}</h5>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : DEFAULT_POSTER}
          alt={movie.Title}
        />
        <div className="movie-info">
          <p className="movie-rating">⭐ IMDb: {movie.imdbRating}</p>
          <p className='movie-date'>
            Release Date: {movie.Year}
          </p>
          <p className="movie-plot">
            {movie.Plot}
          </p>
        </div>
      </div>
    )
  }
  