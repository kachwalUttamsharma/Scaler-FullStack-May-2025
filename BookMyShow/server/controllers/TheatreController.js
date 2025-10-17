const TheatreModel = require("../models/theatreSchema");

const addThreatre = async (req, res, next) => {
  try {
    const newTheatre = new TheatreModel(req.body);
    await newTheatre.save();
    res.send({
      success: true,
      message: "New theatre has been added!",
    });
  } catch (err) {
    res.status(400);
    next(err);
  }
};
const updateTheatre = async (req, res, next) => {
  try {
    const Theatre = await TheatreModel.findByIdAndUpdate(
      req?.body?.theatreId,
      req.body,
      {
        new: true,
      }
    );
    res.send({
      success: true,
      message: "Theatre has been updated!",
    });
  } catch (err) {
    res.status(400);
    next(err);
  }
};
const deleteTheatre = async (req, res, next) => {
  try {
    const theatreId = req.params.theatreId;
    const theatre = await TheatreModel.findByIdAndDelete(theatreId);
    if (!theatre) {
      res.status(404).json({ message: "Theatre not found" });
    }
    res.send({
      success: true,
      message: "The theatre has been deleted!",
    });
  } catch (err) {
    res.status(400);
    next(err);
  }
};
const getAllTheatres = async (req, res, next) => {
  try {
    // populate function helps in getting data from other schema based ref provided in model
    const allTheatres = await TheatreModel.find().populate("owner");
    res.send({
      success: true,
      message: "All Theatres Fetched !",
      data: allTheatres,
    });
  } catch (err) {
    res.status(400);
    next(err);
  }
};

module.exports = {
  addThreatre,
  updateTheatre,
  deleteTheatre,
  getAllTheatres,
};
