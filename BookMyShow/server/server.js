const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");
const userRoute = require("./routes/userRoute");
const movieRoute = require("./routes/movieRoute");
const theatreRoute = require("./routes/theatreRoute");
const showRoute = require("./routes/showRoute");
const bookingRoute = require("./routes/bookingRoute");
const errorHandler = require("./middlewares/errorHandler");
const { validateJWTToken } = require("./middlewares/authorizationMiddleware");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");

const apiLimited = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many request from this IP, please try again after 15 mins",
});

connectDB();
app.use(helmet());
app.use(express.json());
app.use("/bms/v1/", apiLimited);
app.use("/bms/v1/users", userRoute);
app.use("/bms/v1/movies", validateJWTToken, movieRoute);
app.use("/bms/v1/theatres", validateJWTToken, theatreRoute);
app.use("/bms/v1/shows", validateJWTToken, showRoute);
app.use("/bms/v1/bookings", validateJWTToken, bookingRoute);

app.use(errorHandler);

connectDB();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
