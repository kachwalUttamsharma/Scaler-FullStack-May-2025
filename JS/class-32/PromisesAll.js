function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("promise is rejected"));
    }, 10000);
  });
}

function fetchUserPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["post1", "post2", "post3"]);
    }, 1000);
  });
}

// both api call in parallel

// all (Promise.all)

// only this will resolve if all promises are resolved, if any of them is rejected
// promise will be rejected
Promise.all([fetchUserData(), fetchUserPost()])
  .then((result) => {
    console.log("User data ", result);
  })
  .catch((error) => {
    console.log(error);
  });

// whether status of promise is fulfilled
Promise.allSettled([fetchUserData(), fetchUserPost()])
  .then((results) => {
    console.log(results);
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(result.value);
      }
      if (result.status === "rejected") {
        console.log(result.reason);
      }
    });
    // throw new Error("error thrown from then block");
  })
  .catch((error) => console.log(error));
