const {
  addShow,
  deleteShow,
  updateShow,
  getAllShowsByTheatre,
  getAllShowsByMovie,
} = require("../controllers/ShowController");

const router = require("express").Router();

router.post("/addShow", addShow);
router.delete("/deleteShow/:showId", deleteShow);
router.patch("/updateShow", updateShow);
router.get("/getAllShowsByTheatre/:theatreId", getAllShowsByTheatre);
router.post("/getAllTheatresByMovie", getAllShowsByMovie);

module.exports = router;
