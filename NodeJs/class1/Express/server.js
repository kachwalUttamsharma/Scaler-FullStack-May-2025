const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/1", (req, res) => {
  res.send("Hello World from 1!");
});

app.get("/about", (req, res) => {
  res.send("This is info about page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
