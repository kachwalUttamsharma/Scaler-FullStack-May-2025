// any or every async function will return us promise
// async function fetchData() {
//   return {
//     firstName: "Prabhu",
//     lastName: "Sundar",
//   };
// }
// console.log(fetchData());
// const dataPromise = fetchData();
// console.log("dataPromise : ", dataPromise);
// dataPromise.then((data) => {
//   console.log(data);
// });

// async function fetch() {
//   const promise = new Promise((resolve, reject) => {
//     resolve({
//       firstName: "Prabhu",
//       lastName: "Sundar",
//     });
//   });
//   return promise;
// }

// // Promise of Promise (not applicable)
// fetch().then((data) => {
//   console.log(data);
// });

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved");
  }, 5000);
});

console.log("before async function"); // sync
async function name() {
  // everything works like a synchronous way
  console.log("before"); // sync
  // blocking the thread - presumption but it is not
  // blocking the function execution till promise is resolved
  const value = await promise; // then === await // async
  console.log("after"); // sync
  return value;
}

console.log(name());
console.log("after async function"); // sync
