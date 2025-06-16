// slice and splice
const a = [1, 2, 3, 4, 5, 6];

// array.slice(startingIndex, endingIndex) -> output(start, end-1);
// and it doesnt change original array
// const b = a.slice();
// b[2] = 10;
// console.log(b);
// console.log(a);

// splice (it changes original array)
// add, remove, replace

// splice(startingIndex, noofItems to be deleted, adding)
// adding
// a.splice(1, 0, 10, 20, 30);
// console.log(a);
// replace
// console.log(a);
// a.splice(1, 3, 10, 20, 30);
// console.log(a);
// deleting
console.log(a);
a.splice(1, 3);
console.log(a);
