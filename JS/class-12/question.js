// We are given an array, which has the radius of different circles,
// we need to find the area, circumference and diameter for all the radiuses.

const radiusArr = [2, 3, 4, 5, 6];

// pie * r^2 -> area
// 2* pie * r -> circumference
// r*2 -> diameter

function calculateArea(radiusArr) {
  const results = [];
  for (let i = 0; i < radiusArr.length; i++) {
    results.push(Math.PI * radiusArr[i] * radiusArr[i]);
  }
  return results;
}

function calculateCircumference(radiusArr) {
  const results = [];
  for (let i = 0; i < radiusArr.length; i++) {
    results.push(2 * Math.PI * radiusArr[i]);
  }
  return results;
}

function calculateDiameter(radiusArr) {
  const results = [];
  for (let i = 0; i < radiusArr.length; i++) {
    results.push(2 * radiusArr[i]);
  }
  return results;
}

console.log("This is the area o/p ", calculateArea(radiusArr));
console.log("This is circumference o/p ", calculateCircumference(radiusArr));
console.log("This is the diameter o/p ", calculateDiameter(radiusArr));
