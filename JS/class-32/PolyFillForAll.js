// myAll
Promise.myAll1 = function (promises) {
  return new Promise(function (resolve, reject) {
    const result = [];
    let total = 0;
    promises.forEach(async (item, index) => {
      try {
        const currRes = await Promise.resolve(item);
        result[index] = currRes;
        total++;
        if (total === promises.length) {
          resolve(result);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
};

Promise.myAll = function (promises) {
  return new Promise(function (resolve, reject) {
    const result = [];
    let total = 0;
    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          result[index] = res;
          total++;
          if (total === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

const promise1 = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
Promise.myAll(promise1)
  .then((result) => console.log("All promises are resolved : ", result))
  .catch((error) => console.log("error", error));
