const {
  getAllMovies,
  addMovie,
  updateMovie,
  deleteMovie,
  getMovieById,
} = require("../controllers/MovieController");
const router = require("express").Router();

router.get("/getAllMovies", getAllMovies);
router.post("/addMovie", addMovie);
router.patch("/updateMovie", updateMovie);
router.delete("/deleteMovie/:movieId", deleteMovie);
router.get("/movie/:id", getMovieById);

module.exports = router;
