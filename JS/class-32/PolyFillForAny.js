Promise.myAny = function (promises) {
  return new Promise(function (resolve, reject) {
    const rejections = [];
    let rejectionCount = 0;
    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((result) => resolve(result))
        .catch((error) => {
          rejections[index] = error;
          rejectionCount++;
          if (rejectionCount === promises.length) {
            reject(rejections);
          }
        });
    });
  });
};

Promise.myAny1 = function (promises) {
  return new Promise(function (resolve, reject) {
    const rejections = [];
    let rejectionCount = 0;
    promises.forEach(async (item, index) => {
      try {
        const result = await Promise.resolve(item);
        resolve(result);
      } catch (error) {
        rejections[index] = error;
        rejectionCount++;
        if (rejectionCount === promises.length) {
          reject(rejections);
        }
      }
    });
  });
};

const promise1 = [Promise.reject(1), Promise.reject(2), Promise.reject(3)];
Promise.myAny(promise1)
  .then((result) => console.log("promise is resolved : ", result))
  .catch((error) => console.log("All promises got rejected", error));
