import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Spinner from "./Spinner";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    try {
      setLoader(true);
      const url =
        "https://api.themoviedb.org/3/trending/movie/day?api_key=0fa9d94b072b5c497f3a9720acb86bc2";
      axios.get(url).then((response) => {
        const movieData = response?.data?.results?.slice(0, 5);
        setMovies(
          movieData.map((movie) => {
            return {
              title: movie?.title,
              bannerImage: `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
            };
          })
        );
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex == 0 ? movies.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };
  return (
    <div>
      {loader ? (
        <Spinner />
      ) : (
        <>
          {movies?.length > 0 && (
            <div className="relative h-[50vh]">
              <div
                className="h-full bg-cover bg-center flex items-end transition-all duration-500"
                style={{
                  backgroundImage: `url(${movies[currentIndex]?.bannerImage})`,
                }}
              >
                <div className="text-white w-full text-center text-2xl p-4 bg-black/50">
                  {movies[currentIndex].title}
                </div>
              </div>
              <button
                className="absolute left-2 top-1/2 text-white p-2 rounded-full bg-black/50"
                onClick={handlePrev}
              >
                <ChevronLeft />
              </button>
              <button
                className="absolute right-2 top-1/2 text-white p-2 rounded-full bg-black/50"
                onClick={handleNext}
              >
                <ChevronRight />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Banner;
