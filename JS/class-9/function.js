// Function Declaration
// Function Statement
// Function Parameters
function sayHi(from, to) {
  console.log(from + " is Wishing GoodMorning! to " + to);
}

// Function Arguments
// Function Invocation
sayHi("Parbhu", "Nikhil");

// named function expression
const sayHiExpression = function sayHi(from, to) {
  console.log(from + " is Wishing GoodMorning! to " + to);
};

sayHiExpression("Parbhu", "Nikhil");

// annoymous function expression
const sayHiExpression1 = function (from, to) {
  console.log(from + " is Wishing GoodMorning! to " + to);
};

sayHiExpression1("Parbhu", "Nikhil");

// Arrow Function - ES6

const makeCoffee = () => {
  console.log("Here is you coffee");
};

makeCoffee();

const makeTea = () => {
  console.log("Here is you Tea");
};

makeTea();

// First class Citizen || first class funtion
// functions in js can also receveie functions and also can returns functions

const whatDoYouNeedBeverage = (bevarage) => {
  if (bevarage === "Tea") {
    return makeTea;
  } else {
    return makeCoffee;
  }
};

console.log(whatDoYouNeedBeverage("Coffee")());

const helloWorld = (param1) => {
  param1();
};

helloWorld(makeTea);
