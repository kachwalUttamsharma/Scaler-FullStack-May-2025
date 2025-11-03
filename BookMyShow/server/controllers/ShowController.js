const ShowModel = require("../models/showSchema");

const addShow = async (req, res, next) => {
  try {
    const newShow = new ShowModel(req.body);
    await newShow.save();
    res.send({
      success: true,
      message: "New show has been added!",
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

const deleteShow = async (req, res, next) => {
  try {
    const showId = req.params.showId;
    await ShowModel.findByIdAndDelete(showId);
    res.send({
      success: true,
      message: "The show has been deleted!",
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

const updateShow = async (req, res, next) => {
  try {
    await ShowModel.findByIdAndUpdate(req.body.showId, req.body);
    res.send({
      success: true,
      message: "The show has been updated!",
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

const getAllShowsByTheatre = async (req, res, next) => {
  try {
    const theatreId = req.params.theatreId;
    const shows = await ShowModel.find({ theatre: theatreId })
      .populate("movie")
      .populate("theatre");
    res.send({
      success: true,
      message: "All shows are fetched",
      data: shows,
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

const getAllShowsByMovie = async (req, res, next) => {
  try {
    const { movie, date } = req.body;
    const shows = await ShowModel.find({ movie, date }).populate("theatre");
    const theatreMap = new Map();
    shows.forEach((show) => {
      const theatreId = show.theatre._id.toString();
      if (!theatreMap.has(theatreId)) {
        theatreMap.set(theatreId, {
          ...show.theatre._doc,
          shows: [],
        });
      }
      theatreMap.get(theatreId).shows.push(show);
    });
    const uniqueTheatre = Array.from(theatreMap.values());
    res.send({
      success: true,
      message: "All theatres fetched successfully",
      data: uniqueTheatre,
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

const getShowById = async (req, res, next) => {
  try {
    const shows = await ShowModel.findById(req.params.showId)
      .populate("movie")
      .populate("theatre");
    res.send({
      success: true,
      message: "All shows are fetched",
      data: shows,
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

module.exports = {
  addShow,
  deleteShow,
  updateShow,
  getShowById,
  getAllShowsByMovie,
  getAllShowsByTheatre,
};
