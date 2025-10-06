const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();
const port = 3000;

app.use(express.json());

connectDB();

app.use("/shopApi/V1/", productRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
