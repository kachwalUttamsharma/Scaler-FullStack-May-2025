// // const name = "nikhil";
// function printname(cb1, cb2) {
//   console.log("function printname");
//   const name = "sumit";
//   const fullname = `${cb1()}  ${cb2()}`;
//   console.log(fullname);
// }

// function firstname() {
//   return name;
// }

// function lastname() {
//   return name;
// }

// printname(firstname, lastname);

function printName(printLastName, printAge, printAddress) {
  console.log("Shikhar");
  printLastName();
  printAge();
  printAddress();
}
function printLastName() {
  console.log("Singh");
}
function printAge() {
  console.log(24);
}
function printAddress() {
  console.log("Delhi");
}
printName(printLastName, printAge, printAddress);
