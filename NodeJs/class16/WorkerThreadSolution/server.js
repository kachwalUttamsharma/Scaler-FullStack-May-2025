const express = require("express");
const app = express();
const path = require("path");
const { Worker } = require("worker_threads");

app.use(express.static("public"));

function runWorker(number) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.join(__dirname, "fiboFork.js"), {
      workerData: { number },
    });
    console.log("worked thread : ", process.pid);
    console.log(`Forked new worker thread with threadId: ${worker.threadId}`);
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0) {
        console.log("code : ", code);
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
}

app.get("/fib", async (req, res) => {
  const { number, requestNumber } = req.query;
  const flag = setInterval(() => {
    console.log("setinterval got called");
  }, 1000);
  setTimeout(() => clearInterval(flag), 2000);

  setTimeout(() => {
    console.log("settimeout got called");
  });

  Promise.resolve().then(() => console.log("promise resolve called"));
  console.log("handler fn ran for req ", requestNumber);
  if (!number || isNaN(number) || number <= 0) {
    return res
      .status(400)
      .json({ error: "Please provide a valid positive number." });
  }
  console.log("main thread proccess id : ", process.pid);
  try {
    const result = await runWorker(Number(number));
    console.log("Sending response for req", requestNumber);
    res.status(200).json({
      status: "success",
      message: result,
      requestNumber,
    });
  } catch (error) {
    res.status(500).json({ error: "Error Calculating Fibonacci" });
  }
});

app.listen(3000, () => {
  console.log("server is runnning on port 3000");
});
