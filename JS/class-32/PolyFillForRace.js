Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((item) => {
      Promise.resolve(item)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          resolve(error);
        });
    });
  });
};

const promise1 = [Promise.reject(1), Promise.reject(2), Promise.reject(3)];
Promise.myRace(promise1)
  .then((result) => console.log("promise is resolved : ", result))
  .catch((error) => console.log("promise is rejected", error));
