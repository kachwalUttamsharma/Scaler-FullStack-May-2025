import axios from "axios";
import React, { use, useEffect, useState } from "react";
import Spinner from "./Spinner";
import Pagination from "./Pagination";
import MovieList from "./MovieList";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    try {
      setLoader(true);
      const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=0fa9d94b072b5c497f3a9720acb86bc2&language=en-US&page=${pageNo}`;
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
