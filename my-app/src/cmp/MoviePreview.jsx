export function MoviePreview({ movie }) {
    return (
      <div className='movie-preview'>
        <h5 className='movie-header'>{movie.title}</h5>
  
        <img src={movie.imgUrl} alt={movie.title} />
  
        <div className="movie-info">
          <p className='movie-rating'>
            {"⭐".repeat(Math.floor(movie.rating))}
          </p>
  
          <p className='movie-date'>
            Release Date: {movie.year}
          </p>
  
          <ul className="movie-genres">
            {movie.genres.map(genre => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  