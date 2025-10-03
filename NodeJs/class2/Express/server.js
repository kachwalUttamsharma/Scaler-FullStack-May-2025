const express = require("express");
const { errorHandler, errorHandler1 } = require("./ErrorHandling");
const app = express();
const port = 3000;

// resource/ data
// HTTP Verb
// get, post, delete, update (put - complete update or patch - partial update)

app.use(express.json());

app.use(express.static("public"));

// custom middleware
const loggerMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

const loggerSpecificMiddleware = (req, res, next) => {
  console.log(`specific middleware ${JSON.stringify(req.body)}`);
  next();
};

app.use(loggerMiddleware);

app.get("/", (req, res) => {
  //req -> request (incoming data from client)
  // res -> response (outgoing data from server)
  console.log(req);
  res.send("dcsdcsdcs");
});

const users = [
  { id: 1, name: "User1" },
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

app.get("/search/:id", (req, res) => {
  const params = req.params;
  console.log(params);
  const queryParams = req.query;
  console.log(queryParams);
  res.send({});
});

app.post("/data", (req, res) => {
  console.log(req.body);
  res.send("received a post req");
});

app.post("/special", loggerSpecificMiddleware, (req, res) => {
  //res.send("This route is special!");
  res.status(500);
  throw new Error("user is not valid");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
