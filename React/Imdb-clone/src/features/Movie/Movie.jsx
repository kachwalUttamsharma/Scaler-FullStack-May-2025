import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import Pagination from "../../components/Pagination";
import MovieList from "./MovieList";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const TMDB_API_KEY = import.meta.env.VITE_API_KEY;
  const TMDB_TRENDING_MOVIE_BASE_URL = import.meta.env
    .VITE_TRENDING_MOVIES_BASE_URL;

  useEffect(() => {
    try {
      setLoader(true);
      const url = `${TMDB_TRENDING_MOVIE_BASE_URL}?api_key=${TMDB_API_KEY}&language=en-US&page=${pageNo}`;
      axios.get(url).then((response) => {
        const movieData = response?.data?.results;
        setMovies(movieData);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  }, [pageNo]);

  const handlePrev = () => {
    setPageNo((prevPage) => (prevPage === 1 ? 1 : prevPage - 1));
  };
  const handleNext = () => {
    setPageNo((prevPage) => prevPage + 1);
  };
  return (
    <>
      {loader ? (
        <Spinner />
      ) : (
        <div>
          <div className="text-2xl font-bold text-center m-5">
            Trending Movies
          </div>
          <MovieList movies={movies} />
          <Pagination
            pageNo={pageNo}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </div>
      )}
    </>
  );
};

export default Movie;
