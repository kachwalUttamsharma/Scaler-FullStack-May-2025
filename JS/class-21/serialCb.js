const fs = require("fs");

console.log("before");

fs.readFile("f1.txt", function cb1(err, data) {
  if (err) {
    console.log(err, "occured");
  }
  console.log("f1 file data", data.toString());
  fs.readFile("f2.txt", function cb2(err, data) {
    if (err) {
      console.log(err, "occured");
    }
    console.log("f2 file data", data.toString());
    fs.readFile("f3.txt", function cb3(err, data) {
      if (err) {
        console.log(err, "occured");
      }
      console.log("f3 file data", data.toString());
    });
  });
});

console.log("after");
