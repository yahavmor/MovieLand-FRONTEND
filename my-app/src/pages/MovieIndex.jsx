import { useDispatch, useSelector } from "react-redux";
import { MoviePreview } from "../cmp/MoviePreview.jsx";
import { MovieSearchBar } from "../cmp/MovieSearchBar.jsx";
import { useEffect } from "react";
import { setMovie } from "../store/movieSlice.js";



export function MovieIndex() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setMovie(null))
  },[])
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
