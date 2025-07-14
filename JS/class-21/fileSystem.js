const fs = require("fs");

const promiseReadFile1 = fs.promises.readFile("F1.txt");
const promiseReadFile2 = fs.promises.readFile("F2.txt");
const promiseReadFile3 = fs.promises.readFile("F3.txt");

promiseReadFile1.then(function (data) {
  console.log(data.toString());
});
promiseReadFile2.then(function (data) {
  console.log(data.toString());
});
promiseReadFile3.then(function (data) {
  console.log(data.toString());
});

promiseReadFile1.catch(function (error) {
  console.log("error : ", error);
});
promiseReadFile2.catch(function (error) {
  console.log("error : ", error);
});
promiseReadFile3.catch(function (error) {
  console.log("error : ", error);
});

promiseReadFile1.finally(function () {
  console.log("promise has ended");
});
promiseReadFile2.finally(function () {
  console.log("promise has ended");
});
promiseReadFile3.finally(function () {
  console.log("promise has ended");
});
