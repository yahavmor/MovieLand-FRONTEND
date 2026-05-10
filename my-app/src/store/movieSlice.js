import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movie: null,
  movies: []
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovie(state, action) {
      state.movie = action.payload
    },
    setMovies(state, action) {
      state.movies = action.payload
    },
    addMovie(state, action) {
      state.movies.push(action.payload)
    }
  }
})

export const { setMovie, setMovies, addMovie } = movieSlice.actions
export default movieSlice.reducer
