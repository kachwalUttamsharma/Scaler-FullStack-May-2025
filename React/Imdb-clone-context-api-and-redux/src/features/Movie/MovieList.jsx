import React, { useContext, useEffect, useState } from "react";
import MovieInfo from "./MovieInfo";
import { MovieContext } from "../../context/MovieContextWrapper";

const MovieList = ({ movies }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { watchList, addToWatchList, removeFromWatchList } =
    useContext(MovieContext);

  const checkIfMoviePresentInWatchList = (movie) => {
    return watchList.find((m) => m?.id == movie?.id) ? true : false;
  };

  const handleOpenModal = (movie) => {
    setOpenModal(true);
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedMovie(null);
  };

  return (
    <>
      <div className="flex justify-evenly flex-wrap gap-8">
        {movies?.length > 0 &&
          movies.map((movie, index) => {
            return (
              <div key={index}>
                <div
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
                  }}
                  className="h-[30vh] w-[200px] bg-center bg-cover rounded-xl flex flex-col justify-between items-end"
                >
                  {checkIfMoviePresentInWatchList(movie) ? (
                    <div
                      className="m-4 flex justify-center h-8 w-8 items-center rounded-xl bg-gray-900/60 hover:cursor-pointer"
                      onClick={() => removeFromWatchList(movie)}
                    >
                      &#10060;
                    </div>
                  ) : (
                    <div
                      className="m-4 flex justify-center h-8 w-8 items-center rounded-xl bg-gray-900/60 hover:cursor-pointer"
                      onClick={() => addToWatchList(movie)}
                    >
                      &#128525;
                    </div>
                  )}
                  <div
                    className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-xl hover:cursor-pointer"
                    onClick={() => handleOpenModal(movie)}
                  >
                    {movie?.title}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {openModal && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/50 h-screen overflow-y-auto flex justify-center items-center">
          <MovieInfo
            movie={selectedMovie}
            handleCloseModal={handleCloseModal}
          />
        </div>
      )}
    </>
  );
};

export default MovieList;
