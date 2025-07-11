const fs = require("fs");

console.log("before");

fs.readFile("f1.txt", (err, data) => {
  if (err) {
    console.log(err, "occured");
  }
  console.log("f1 file data", data.toString());
});

fs.readFile("f2.txt", (err, data) => {
  if (err) {
    console.log(err, "occured");
  }
  console.log("f2 file data", data.toString());
});

fs.readFile("f3.txt", (err, data) => {
  if (err) {
    console.log(err, "occured");
  }
  console.log("f3 file data", data.toString());
});

console.log("after");
