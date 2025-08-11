// const a = () => {};
// const b = {};
// const c = [];
// // non primitive Data types => truthy value ?
// if (a && b && c) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// true, false

const d = -1;

// 0 or -0  it will always be false
// any other number will give us truthy
// "" return false other string "a" true
if (d) {
  console.log("true");
} else {
  console.log("false");
}

// null - false
// undefined - false
// Nan - false

// true -> non primitive, string length greater >= 1, any number other than 0
