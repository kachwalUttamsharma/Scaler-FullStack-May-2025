// time ?? -> block the main thread (call stack)

const fs = require("fs");

console.log("before");

// blocking the thread
// const data = fs.readFileSync("f1.txt");

// unblock - async
fs.readFile("f2.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});

// console.log(data.toString());

console.log("after");
