const fs = require("fs");

console.log("before");

function cb1(err, data) {
  if (err) {
    console.log(err, "occured");
  }
  console.log("f1 file data", data.toString());
  fs.readFile("f2.txt", cb2);
}
fs.readFile("f1.txt", cb1);

function cb2(err, data) {
  if (err) {
    console.log(err, "occured");
  }
  console.log("f2 file data", data.toString());
  fs.readFile("f3.txt", cb3);
}

function cb3(err, data) {
  if (err) {
    console.log(err, "occured");
  }
  console.log("f3 file data", data.toString());
}

console.log("after");
