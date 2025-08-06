const numbers = [1, 2, 3, 4];

// const sum = numbers.reduce(function (previousResult, val, idx, arr) {
//   return previousResult + val;
// });

// console.log(sum);

Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  if (this.length == 0) {
    throw new TypeError("Reduce of empty array with no initial value");
  }
  let result = initialValue || this[0];
  for (let i = 0; i < this.length; i++) {
    if (!initialValue && i == 0) {
      continue;
    }
    result = callback(result, this[i], i, this);
  }
  return result;
};

const sum = numbers.myReduce(function (previousResult, val, idx, arr) {
  return previousResult + val;
});

console.log(sum);
