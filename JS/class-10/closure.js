// console.log(a);
// const a = 10;
// test();
// const test = function test() {
//   console.log("test");
// };

// function test() {
//   let a = 10;
//   var b = 20;
//   const c = 30;
// }

// console.log(a, b, c);

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a, b, c);
// }
// console.log(a, b, c);

// var a = 30;
// function parent() {
//   var a = 20;
//   function child() {
//     console.log(a);
//   }
//   console.log(a);
//   child();
// }
// console.log(a);
// parent();

// 30 20 20

// const num = 10;
// function fn() {
//   let num = 20;
//   function fn1() {
//     console.log(num); // 20
//   }
//   num = 30;
//   return fn1;
// }
// console.log(fn());
// const newFunc = fn();
// newFunc();

// function outerFunction() {
//   let count = 0;
//   function innerFunction() {
//     count++;
//     return count;
//   }
//   return innerFunction;
// }

// const innerFunc = outerFunction();
// console.log(innerFunc()); // 1
// console.log(innerFunc()); // 1 (2)
// console.log(innerFunc()); // 1 (3)

// const innerFunc1 = outerFunction();
// console.log(innerFunc1()); // 1
// console.log(innerFunc1()); // 1 (2)
// console.log(innerFunc1()); // 1 (3)

// function createCounter(init, delta) {
//   function count() {
//     init = init + delta;
//     return init;
//   }
//   return count;
// }

// const e1 = createCounter(10, 5);
// console.log(e1()); // 15
// console.log(e1()); // 15 | 20 (10, 5) or (15, 5) ?

let iamINGEC = 200;
function getFirstName(firstName) {
  console.log("I have got your first Name");
  return function getLastName(lastName) {
    if (lastName === "" || lastName == undefined) {
      throw new Error("lastname is mandatory");
    }
    console.log("I have got Your last Name");
    return function greeter() {
      console.log(`Hi I am ${firstName} ${lastName}`);
      console.log("Hi GEC", iamINGEC);
    };
  };
}

// greeter -> getLastName
// getLastName -> getFirstName
const fnNameReturn = getFirstName("Prabhu");
const lnNameReturn = fnNameReturn();
lnNameReturn();
