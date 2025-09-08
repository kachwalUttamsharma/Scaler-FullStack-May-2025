import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import genreids from "../../helpers/GenreIds";
import { ArrowUp, ArrowDown } from "lucide-react";
import MovieRecommendations from "./MovieRecommendations";

const WatchListTable = () => {
  const [watchList, setWatchList] = useState([]);
  const [search, setSearch] = useState("");
  const [currGenre, setCurrGenre] = useState("All Genre");
  const [genreList, setGenreList] = useState(["All Genre"]);
  const [showModel, setShowModal] = useState(false);

  useEffect(() => {
    const watchListData = JSON.parse(
      localStorage.getItem("ImdbWatchListMovies")
    );
    const genreList = new Set(
      watchListData?.map((movie) => genreids[movie?.genre_ids[0]])
    );
    setGenreList(["All Genre", ...genreList]);
    setWatchList(watchListData);
  }, []);

  const handleAscendingOrderRatings = () => {
    const sortedMovies = watchList?.sort(
      (A, B) => A?.vote_average - B?.vote_average
    );
    setWatchList([...sortedMovies]);
  };
  const handleDesendingOrderRatings = () => {
    const sortedMovies = watchList?.sort(
      (A, B) => B?.vote_average - A?.vote_average
    );
    setWatchList([...sortedMovies]);
  };

  const removeFromWatchList = (movie) => {
    setWatchList((prevMovieList) => {
      const filteredWatchList = prevMovieList.filter((m) => m?.id != movie?.id);
      localStorage.setItem(
        "ImdbWatchListMovies",
        JSON.stringify(filteredWatchList)
      );
      return filteredWatchList;
    });
  };

  return (
    <div className="my-10 mx-5">
      <button
        className="flex justify-center items-center bg-blue-400 hover:bg-blue-500 transition duration-300 h-[3rem] w-[14rem] text-white font-bold border border-blue-700 rounded-xl shadow-md cursor-pointer mx-[43%] my-4"
        onClick={() => setShowModal((prevState) => !prevState)}
      >
        Recommed Movies
      </button>
      {showModel && (
        <MovieRecommendations
          watchList={watchList}
          setShowModal={setShowModal}
        />
      )}
      <div className="flex justify-center m-4">
        {genreList?.map((genre, idx) => {
          return (
            <div
              key={idx}
              className={`mx-4 flex justify-center items-center h-[3rem] w-[9rem] font-bold border rounded-xl cursor-pointer ${
                currGenre === genre ? "bg-blue-400 text-white" : "bg-gray-300"
              }`}
              onClick={() => setCurrGenre(genre)}
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-10">
        <input
          type="text"
          placeholder="Search by movie name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-[3rem] w-[18rem] px-4 outline-none border border-slate-700 rounded-lg bg-gray-300"
        />
      </div>
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th className="px-6 py-4 font-medium text-gray-900">
              <div className="flex gap-2">
                <ArrowUp
                  size={24}
                  strokeWidth={2}
                  onClick={handleAscendingOrderRatings}
                />
                <div>Ratings</div>
                <ArrowDown
                  size={24}
                  strokeWidth={2}
                  onClick={handleDesendingOrderRatings}
                />
              </div>
            </th>
            <th className="px-6 py-4 font-medium text-gray-900">Polularity</th>
            <th className="px-6 py-4 font-medium text-gray-900">Genre</th>
            <td className="pl-6 py-4 font-medium text-gray-900">
              Action Button
            </td>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {watchList?.length > 0 &&
            watchList
              .filter((movie) => {
                return (
                  currGenre === "All Genre" ||
                  genreids[movie.genre_ids[0]] === currGenre
                );
              })
              .filter((movie) => {
                return movie?.title
                  .toLowerCase()
                  .trim()
                  .includes(search.toLowerCase());
              })
              .map((movie, idx) => {
                return (
                  <tr key={idx}>
                    <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                        alt="Poster of Movie"
                        className="h-[6rem] w-[10rem] object-cover"
                      />
                      <div className="font-medium text-gray-700 text-sm">
                        {movie?.title}
                      </div>
                    </td>
                    <td className="pl-6 py-4">{movie?.vote_average}</td>
                    <td className="pl-6 py-4">{movie?.popularity}</td>
                    <td className="pl-6 py-4">
                      {genreids[movie?.genre_ids[0]]}
                    </td>
                    <td
                      className="pl-6 py-4 text-red-500 cursor-pointer"
                      onClick={() => removeFromWatchList(movie)}
                    >
                      REMOVE
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default WatchListTable;
