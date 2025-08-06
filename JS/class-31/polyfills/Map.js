"use strict";

const numbers = [1, 2, 3, 4];

const multiplier = {
  factor: 4,
};
// const double = numbers.map(function (val, idx, arr) {
//   console.log(this);
//   return val * this.factor;
// }, multiplier);

// console.log(double, numbers);

Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const res = callback.call(thisArg, this[i], i, this);
    result.push(res);
  }
  return result;
};

const doublePolyfill = numbers.myMap(function (val, idx, arr) {
  console.log(this);
  return val * this.factor;
}, multiplier);

console.log(doublePolyfill, numbers);
