const {
  addThreatre,
  updateTheatre,
  deleteTheatre,
  getAllTheatres,
  getAllTheatresByOwner,
} = require("../controllers/TheatreController");

const router = require("express").Router();

router.post("/addTheatre", addThreatre);
router.patch("/updateTheatre", updateTheatre);
router.delete("/deleteTheatre/:theatreId", deleteTheatre);
router.get("/getAllTheatres", getAllTheatres);
router.get("/getAllTheatresByOwner", getAllTheatresByOwner);
module.exports = router;
