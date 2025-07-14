// In JavaScript, a promise is an object representing the
// eventual completion or failure of an asynchronous operation.
// It provides a way to handle asynchronous code more cleanly
// and manage the results or errors that may occur when the operation completes.

// Promises have three states: pending, resolved (fulfilled), or rejected,
//  and they allow you to attach callback functions to handle these different
//  outcomes.

// create a promise (producer code)
const coinTossPromise = new Promise(function (resolve, reject) {
  // executor of promise
  setTimeout(function () {
    // tossing up the coin (0.0 - 0.9 ~= 1)
    const isHeads = Math.random() > 0.5;
    if (isHeads) {
      resolve("Heads");
    } else {
      reject(
        "Tails - Coin toss resulted in tails, considered as a fail for this example"
      );
    }
  }, 1000);
});

// consumer logic
// then, catch, finally

// the cb function provided in this will be called only if promise is resolved
coinTossPromise.then((result) => {
  console.log(result);
});
// the cb function provided in this will be called only if promise is rejected
coinTossPromise.catch((error) => {
  console.log(error);
});
// will get executed at last irrespective of success or failure of promise
coinTossPromise.finally(() => {
  console.log("Coin toss is completed");
});
