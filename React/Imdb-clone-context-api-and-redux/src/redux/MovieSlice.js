import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    movies: [],
    error: false,
    loading: false,
  },
  reducers: {
    movieLoading: (state) => {
      state.error = false;
      state.loading = true;
    },
    movieError: (state) => {
      state.error = true;
      state.loading = false;
    },
    movieData: (state, data) => {
      state.error = false;
      state.loading = false;
      state.movies = data.payload;
    },
    stopLoading: (state) => {
      state.error = false;
      state.loading = false;
    },
  },
});

export const { movieData, movieError, movieLoading, stopLoading } =
  MovieSlice.actions;

export default MovieSlice.reducer;
