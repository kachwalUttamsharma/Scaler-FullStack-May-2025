Promise.myAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let count = 0;
    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          results[index] = { status: "fullfilled", value: res };
        })
        .catch((error) => {
          results[index] = { status: "rejected", reason: error };
        })
        .finally(() => {
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

const promise1 = [Promise.resolve(1), 2, Promise.resolve(3)];
Promise.myAllSettled(promise1)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
