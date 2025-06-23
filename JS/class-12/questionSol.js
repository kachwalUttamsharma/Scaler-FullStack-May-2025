const radiusArr = [2, 3, 4, 5, 6];

// calculate is called as HOF (Higher Order Function)
// Higher-order functions are those functions where the function is passed as an argument.
// A higher order function is a function that can take one or more functions as arguments,
// or returns a function as its result.
function calculate(radiusArr, logic) {
  const results = [];
  for (let i = 0; i < radiusArr.length; i++) {
    results.push(logic(radiusArr[i]));
  }
  return results;
}

function calculateArea(radius) {
  return Math.PI + radius * radius;
}

function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

function calculateDiameter(radius) {
  return 2 * radius;
}

console.log("This is the area o/p ", calculate(radiusArr, calculateArea));
console.log(
  "This is circumference o/p ",
  calculate(radiusArr, calculateCircumference)
);
console.log(
  "This is the diameter o/p ",
  calculate(radiusArr, calculateDiameter)
);
