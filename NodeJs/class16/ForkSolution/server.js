const express = require("express");
const app = express();
const { fork } = require("child_process");
const path = require("path");

app.use(express.static("public"));

app.get("/fib", (req, res) => {
  const { number, requestNumber } = req.query;
  console.log("handler fn ran for req ", requestNumber);
  console.log("main process pid : ", process.pid);
  if (!number || isNaN(number) || number <= 0) {
    return res
      .status(400)
      .json({ error: "Please provide a valid positive number." });
  }
  const fiboResponse = fork(path.join(__dirname, "fiboFork.js"));
  console.log(
    "Forked new process for req: ",
    requestNumber,
    "with PID: ",
    fiboResponse.pid
  );
  fiboResponse.send({ number });
  fiboResponse.on("message", (answer) => {
    console.log("sending response for req ", requestNumber);
    res.status(200).json({
      status: "success",
      message: answer,
      requestNumber,
    });
    fiboResponse.kill();
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
