const {
  getAllMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/MovieController");
const router = require("express").Router();

router.get("/getAllMovies", getAllMovies);
router.post("/addMovie", addMovie);
router.patch("/updateMovie", updateMovie);
router.delete("/deleteMovie/:movieId", deleteMovie);

module.exports = router;
