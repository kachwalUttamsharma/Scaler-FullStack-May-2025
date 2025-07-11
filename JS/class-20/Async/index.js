// console.log("start");

// // function sync() {
// //   for (let i = 0; i < 20000000; i++) {
// //     console.log("sync");
// //   }
// // }

// // sync();

// function add(a, b) {
//   return a + b;
// }

// // anything which is time taking should be executed in async
// setTimeout(() => {
//   console.log("from timeout");
//   add(1, 2);
// }, 2000);

// console.log("end");

// synchronous code => this code executes line by line
/**
 * Asynchronous code -> piece of code that's executed at the current point of time
 * and other piece of code is executed on later part
 */

// console.log("before"); // sync

// setTimeout(function fn() {
//   console.log("fn" + 1000);
// }, 1000); // async
// setTimeout(function fn() {
//   console.log("fn" + 500);
// }, 500); // async

// console.log("after"); // sync

console.log("Before"); // 1ms
const cb2 = () => {
  let timeInFuture = Date.now() + 5000; // 5sec
  while (Date.now() < timeInFuture) {} // continue for 5 sec (block below part of code)
  console.log("Set timeout 1"); // 5 sec 1ms
};
const cb1 = () => {
  console.log("hello"); // 1sec
};
setTimeout(cb2, 1000); // 2ms
setTimeout(cb1, 2000); // 3ms
console.log("After"); // 4ms

// cb2 <- cb1
