const numbers = [1, 2, 3, 4, 5];
const evenOdd = {
  even: false,
};
const evens = numbers.filter(function (val, idx, arr) {
  if (this.even) {
    return val % 2 === 0;
  } else {
    return val % 2 !== 0;
  }
}, evenOdd);

console.log(evens, numbers);

Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const evens1 = numbers.myFilter(function (val, idx, arr) {
  if (this.even) {
    return val % 2 === 0;
  } else {
    return val % 2 !== 0;
  }
}, evenOdd);

console.log(evens1, numbers);
