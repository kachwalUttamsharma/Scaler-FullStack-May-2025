const movieModel = require("../models/movieSchema");

const addMovie = async (req, res, next) => {
  try {
    const newMovie = new movieModel(req?.body);
    await newMovie.save();
    res.send({
      success: true,
      message: "New Movie has been Added",
      data: newMovie,
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};
const getAllMovies = async (req, res, next) => {
  try {
    const allMovies = await movieModel.find();
    res.send({
      success: true,
      message: "All movies has been fetched",
      data: allMovies,
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};
const updateMovie = async (req, res, next) => {
  try {
    const movie = await movieModel.findByIdAndUpdate(
      req?.body?.movieId,
      req.body,
      { new: true } // adding this flag will ensure movie object
      // being returned is updated
    );
    res.send({
      success: true,
      message: "The movie has been updated",
      data: movie,
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};
const deleteMovie = async (req, res, next) => {
  try {
    const movieId = req.params.movieId;
    const movie = await movieModel.findByIdAndDelete(movieId);
    if (!movie) {
      res.status(404).json({ message: "Movie not found" });
    }
    // res.status(200).json({success: true, message: "The movie has been deleted" });
    res.send({
      success: true,
      message: "The movie has been deleted",
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

const getMovieById = async (req, res, next) => {
  try {
    const movie = await movieModel.findById(req.params.id);
    res.send({
      success: true,
      message: "The Movie has been deleted",
      data: movie,
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

module.exports = {
  addMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
  getMovieById,
};
