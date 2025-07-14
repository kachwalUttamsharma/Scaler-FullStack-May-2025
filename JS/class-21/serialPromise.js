const fs = require("fs");

const f1p = fs.promises.readFile("f1.txt");

f1p
  .then((result) => {
    console.log(result.toString());
    const f2p = fs.promises.readFile("f2.txt");
    return f2p;
  })
  .then((result) => {
    console.log(result.toString());
    const f3p = fs.promises.readFile("f3.txt");
    return f3p;
  })
  .then((result) => {
    console.log(result.toString());
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("promises are resolved or rejected");
  });
