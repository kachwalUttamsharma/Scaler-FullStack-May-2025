const express = require("express");
const { registerUser, loginUser } = require("../controllers/UserController");
const router = express.Router();

// post (login, register)
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;

// /bms/v1/users/register
// /bms/v1/users/login
