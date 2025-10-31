import { axiosInstance } from ".";

export const getAllMovies = async () => {
  try {
    const response = await axiosInstance.get("/movies/getAllMovies");
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const addMovie = async (values) => {
  try {
    const response = await axiosInstance.post("/movies/addMovie", values);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateMovie = async (values) => {
  try {
    const response = await axiosInstance.patch("/movies/updateMovie", values);
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const deleteMovie = async (movieId) => {
  try {
    const response = await axiosInstance.delete(
      `/movies/deleteMovie/${movieId}`
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getMovieById = async (id) => {
  try {
    const response = await axiosInstance.get(`/movies/movie/${id}`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};
