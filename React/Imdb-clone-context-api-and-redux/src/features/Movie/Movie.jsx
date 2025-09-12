import React, { useEffect } from "react";
import Spinner from "../../components/Spinner";
import Pagination from "../../components/Pagination";
import MovieList from "./MovieList";
import { useSelector, useDispatch } from "react-redux";
import { handleNext, handlePrevious } from "../../redux/PaginationSlice";
import fetchTrendingMovies from "../../redux/middleware/fetchTrendingMovies";
const Movie = () => {
  const { movies, error, loading } = useSelector((state) => state.movie);
  const { pageNo } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendingMovies(pageNo));
  }, [pageNo]);

  if (error) {
    return <div>Something Went Wrong</div>;
  }
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="text-2xl font-bold text-center m-5">
            Trending Movies
          </div>
          <MovieList movies={movies} />
          <Pagination
            pageNo={pageNo}
            handleNext={() => dispatch(handleNext())}
            handlePrev={() => dispatch(handlePrevious())}
          />
        </div>
      )}
    </>
  );
};

export default Movie;
