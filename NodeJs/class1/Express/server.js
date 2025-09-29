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

const users = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User2" },
];

app.get("/users", (req, res) => {
  res.status(200).json({ message: "All users", users: users });
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = users.find((u) => u.id == userId);
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  res.status(200).json({ message: "user found", user: user });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
