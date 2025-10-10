const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/UserController");
const router = express.Router();
const { validateJWTToken } = require("../middlewares/authorizationMiddleware");

// post (login, register)
router.post("/register", registerUser);
router.post("/login", loginUser);
// protected api
// here validate whether user is logged in ?
router.get("/getCurrentUser", validateJWTToken, currentUser);

module.exports = router;

// /bms/v1/users/register
// /bms/v1/users/login
