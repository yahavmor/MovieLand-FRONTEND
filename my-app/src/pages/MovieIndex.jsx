import { useSelector } from "react-redux";
import { MoviePreview } from "../cmp/MoviePreview.jsx";
import { MovieSearchBar } from "../cmp/MovieSearchBar.jsx";



export function MovieIndex() {
  const movie = useSelector(state => state.movie.movie);
  return (
    <div className="movie-index">
      <MovieSearchBar />
      {movie && (
        <div className="movie-index-preview">
          <MoviePreview movie={movie} />
        </div>
      )}
    </div>
  );
}
