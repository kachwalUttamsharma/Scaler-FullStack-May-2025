const {
  addShow,
  deleteShow,
  updateShow,
  getAllShowsByTheatre,
} = require("../controllers/ShowController");

const router = require("express").Router();

router.post("/addShow", addShow);
router.delete("/deleteShow/:showId", deleteShow);
router.patch("/updateShow", updateShow);
router.get("/getAllShowsByTheatre/:theatreId", getAllShowsByTheatre);

module.exports = router;
