import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";

const MovieInfo = ({ movie, handleCloseModal }) => {
  const { id, title, poster_path, release_date, overview, vote_average } =
    movie;
  const [loader, setLoader] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const TMDB_API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        setLoader(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${TMDB_API_KEY}`
        );
        const trailerObj = response?.data?.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (trailerObj) {
          setTrailerUrl(`https://www.youtube.com/embed/${trailerObj?.key}`);
        }
      } catch (erorr) {
        console.log(erorr);
      } finally {
        setLoader(false);
      }
    };
    fetchTrailer();
  }, [TMDB_API_KEY]);
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-[35vw] max-h-[90vh] ">
      {loader ? (
        <Spinner />
      ) : (
        <>
          <div className="flex flex-row gap-6">
            {poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                alt={`${title} poster`}
                className="w-[33%] rounded-lg object-cover"
              />
            ) : (
              <div>No Image Available</div>
            )}
            <div>
              <h2 className="text-3xl font-bold text-blue-500">{title}</h2>
              <p className="text-gray-500 font-bold">
                Release Date: {release_date}
              </p>
              <p className="text-gray-500 font-bold">
                Average Vote: {vote_average ? vote_average.toFixed(1) : "N/A"}
              </p>
              <p className="text-gray-700">
                {overview ? overview : "No Overview Available"}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-blue-500 mb-3">
              Trailer
            </h3>
            <div className="w-full h-60">
              {trailerUrl ? (
                <iframe
                  src={trailerUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                ></iframe>
              ) : (
                <p className="text-gray-500 text-center">
                  Trailer Not Available
                </p>
              )}
            </div>
          </div>
          <button
            className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </>
      )}
    </div>
  );
};

export default MovieInfo;
