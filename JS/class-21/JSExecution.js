console.log("before"); // sync - 1

const promise = new Promise((resolve, reject) => {
  resolve("Promise is resolved"); // async
});

console.log("before -1 "); // sync - 2

promise.then((data) => {
  console.log(data); // async - 5
});

console.log("after"); // sync - 3

setTimeout(() => {
  console.log("first setTimout"); //async - 7
}, 1000);

setTimeout(() => {
  console.log("second setTimout"); // aysnc - 8
}, 2000);

setTimeout(() => {
  console.log("third setTimout"); // async - 6
}, 0);

console.log("after-1"); // sync - 4
