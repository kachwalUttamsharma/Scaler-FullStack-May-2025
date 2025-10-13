const {
  getAllMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/MovieController");
const { validateJWTToken } = require("../middlewares/authorizationMiddleware");
const router = require("express").Router();

router.get("/getAllMovies", validateJWTToken, getAllMovies);
router.post("/addMovie", validateJWTToken, addMovie);
router.patch("/updateMovie", validateJWTToken, updateMovie);
router.delete("/deleteMovie", validateJWTToken, deleteMovie);

module.exports = router;
