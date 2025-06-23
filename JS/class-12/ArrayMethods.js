// map, filter, reduce

// const arr = [1, 2, 3, 4, 5];

// when you have common operation on each item (finding a square)
// find the sqaure of arr
// const squaredArr = [];

// for (let i = 0; i < arr.length; i++) {
//   squaredArr.push(arr[i] * arr[i]);
// }

// function map(cb) {
//   const squaredArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     squaredArr.push(cb(arr[i]));
//   }
//   return squaredArr;
// }

// const squaredArr = arr.map(function (num) {
//   return num * num;
// });
// console.log(squaredArr, arr);

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]; // inr
// const inrToUsd = 86;

// const convertedValues = transactions.map(function (inr) {
//   return inr / inrToUsd;
// });
// console.log(convertedValues, transactions);

// filter
// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 17];

// const evenArr = myArr.filter(function (num) {
//   return num % 2 === 0;
// });

// console.log(evenArr, myArr);

// const positiveTransactions = transactions.filter(function (num) {
//   return num > 0;
// });

// console.log(positiveTransactions, transactions);

// prefix sum
const arr = [1, 2, 3, 4, 5];

// prefix sum op : [1,3,6,10,15]
const prefixSum = [];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  prefixSum.push(sum);
}
// console.log(prefixSum);
// console.log(sum);

// sum of all number
// const totalSum = arr.reduce(function (prevValue, currentValue) {
//   prevValue += currentValue;
//   return prevValue;
// }, 0);
// console.log(totalSum);

// prefix sum
const prefixSum1 = arr.reduce(function (acc, currentValue, index) {
  if (index == 0) {
    acc.push(currentValue);
  } else {
    acc.push(acc[index - 1] + currentValue);
  }
  return acc;
}, []);
console.log(prefixSum, prefixSum1);
