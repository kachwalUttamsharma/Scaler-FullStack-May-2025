// console.log(x); // undefined | Cannot access 'x' before initialization
const x = 1;
console.log(x); // 1
let y;
console.log(y); // undefined

// console.log(add(2, 3)); // 5

const add = function (x, y) {
  return x + y;
};

console.log(add(2, 3));
