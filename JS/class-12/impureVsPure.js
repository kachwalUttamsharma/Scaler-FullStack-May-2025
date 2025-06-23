// An impure function is a function that contains one or more side effects.
// It mutates data outside of its scope
// and does not predictably produce the same output for the same input.

let c = 0;
function sum(a, b) {
  return a + b + c++;
}

console.log(sum(2, 3)); // 5
console.log(sum(2, 3)); // 6
console.log(sum(2, 3)); // 7

// A pure function is a function without any side effects,
// it will provide the same output for the same inputs/arguments provided.
function sum1(a, b) {
  return a + b;
}
console.log(sum1(2, 3)); // 5
console.log(sum1(2, 3)); // 5
console.log(sum1(2, 3)); // 5
