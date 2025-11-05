const {
  makePayment,
  bookShow,
  getAllBookings,
} = require("../controllers/BookingController");

const router = require("express").Router();

router.post("/makePayment", makePayment);
router.post("/bookShow", bookShow);
router.get("/getAllBookings", getAllBookings);

module.exports = router;
