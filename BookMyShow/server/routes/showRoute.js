const {
  addShow,
  deleteShow,
  updateShow,
  getAllShowsByTheatre,
  getAllShowsByMovie,
  getShowById,
} = require("../controllers/ShowController");

const router = require("express").Router();

router.post("/addShow", addShow);
router.delete("/deleteShow/:showId", deleteShow);
router.patch("/updateShow", updateShow);
router.get("/getAllShowsByTheatre/:theatreId", getAllShowsByTheatre);
router.post("/getAllTheatresByMovie", getAllShowsByMovie);
router.get("/getShowById/:showId", getShowById);

module.exports = router;
