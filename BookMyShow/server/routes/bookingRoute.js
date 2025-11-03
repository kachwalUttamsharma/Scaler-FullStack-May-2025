const { makePayment, bookShow } = require("../controllers/BookingController");

const router = require("express").Router();

router.post("/makePayment", makePayment);
router.post("/bookShow", bookShow);

module.exports = router;
