import { getRandInt } from "../services/utils"



export function MoviePreview({ movie }) {
  console.log(movie)
    return (
      <div className='movie-preview'>
        <h5 className='movie-header'>{movie.Title}</h5>
  
        <img src={movie.Poster} alt={movie.Title} />
  
        <div className="movie-info">
          <p className='movie-rating'>
            {"⭐".repeat(getRandInt(9,2))}
          </p>
  
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
  