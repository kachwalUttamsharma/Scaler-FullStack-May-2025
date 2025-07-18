const p = new Promise((resolve, reject) => {
  setTimeout(() => reject("promsie1"), 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promsie2"), 4000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promsie3"), 5000);
});

// all or none
// Promise.all([p, p2, p3])
//   .then((result) => console.log("success: ", result))
//   .catch((error) => console.log("error : ", error))
//   .finally(() => console.log("execution done"));

// which every successful response comes first will be handles
Promise.any([p, p2, p3])
  .then((result) => console.log("success: ", result))
  .catch((error) => console.log("error : ", error))
  .finally(() => console.log("execution done"));
