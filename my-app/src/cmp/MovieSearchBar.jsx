import { useState } from "react"
import MovieService from "../services/movie.service"
import { addMovie, setMovie } from "../store/movieSlice"
import { useDispatch, useSelector } from 'react-redux'


export function MovieSearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()

  async function handleSubmit(e) {
    e.preventDefault()
    if (!searchTerm) return
    const movie = await MovieService.searchMovie(searchTerm)
    dispatch(setMovie(movie))
    dispatch(addMovie(movie))
  }

  return (
    <div className="movie-searchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          placeholder="Search anything..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  )
}
