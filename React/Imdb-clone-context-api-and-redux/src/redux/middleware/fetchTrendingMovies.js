import {
  movieData,
  movieError,
  movieLoading,
  stopLoading,
} from "../MovieSlice";
import axios from "axios";

const fetchTrendingMovies = (pageNo) => {
  const TMDB_API_KEY = import.meta.env.VITE_API_KEY;
  const TMDB_TRENDING_MOVIE_BASE_URL = import.meta.env
    .VITE_TRENDING_MOVIES_BASE_URL;
  return async (dispatch) => {
    try {
      dispatch(movieLoading());
      const url = `${TMDB_TRENDING_MOVIE_BASE_URL}?api_key=${TMDB_API_KEY}&language=en-US&page=${pageNo}`;
      axios.get(url).then((response) => {
        const data = response?.data?.results;
        dispatch(movieData(data));
      });
    } catch (error) {
      dispatch(movieError());
    } finally {
      dispatch(stopLoading());
    }
  };
};

export default fetchTrendingMovies;
