// // primitive data types

// // number

// const a = 10;
// const b = -10;
// const c = 10.345;
// const d = -10.345;

// console.log(typeof a);
// console.log(a, b, c, d);

// // string

// const e = "e";
// const f = "hello world";

// console.log(typeof e, typeof f);
// console.log(e, f);

// // null & boolean
// let isEven = null;
// console.log(typeof isEven, isEven);
// isEven = true;
// console.log(typeof isEven, isEven);

// // undefined
// let g;
// console.log(g); // g is undefined (this is a default value for any container or variable)
// // console.log(h); // h is not defined (if a variable is not declared
// // it will throw not defined error)

// // non-primitive data types

// // arrays
// // collection of values which can store different data type values
// // index starts from 0 itself and goes n-1 (n == length of array)
// const j = [1, 2, 3.45, "data", true, null];
// console.log(typeof j, j);

// const len = j.length;
// console.log(len);

// console.log(j[1]);
// j[1] = "updating the data";
// console.log(j[1], j);
// console.log("Array j val : ", j);

// // push, pop, unshift, shift

// // push - adding new element in the array at last index+1;
// j.push(10000);
// console.log("Array j val : ", j);

// // pop - used to remove last element from the array
// j.pop();
// console.log("Array j val : ", j);

// // unshift == push (but unshift adds new element at start)
// j.unshift("starting element");
// console.log("Array j val : ", j);

// // shift == pop (but shift removes element at start)
// j.shift();
// console.log("Array j val : ", j);

// j[10] = 123;
// for (let i = 0; i < j.length; i++) {
//   console.log(j[i]);
// }
// console.log(j);
// console.log(j[13]);

// objects
// collection of different data types (same as array) but array are index based
// where as objects are key based (key are custom user defined)

// 2 ways of creating objects

// 1 - using new keyword
// const user = new Object();
// console.log(user);

// // 2 - object literals
// const user1 = {};
// console.log(user1);

// // key(runtime they are converted into string): value (any data type)
// const person = {
//   name: "Ravi",
//   age: 24,
//   phone: 12345321,
// };
// console.log(person);

// // 2 ways (dot notation and [] brackets)
// // when you know specific key
// console.log(person.name);
// // when you dont exactly know key and it is fetched at run time
// const newKey = "phone";
// console.log(person[newKey]);

// for (let key in person) {
//   console.log(person[key]);
// }
// delete person.phone;
// console.log(person);
// person.address = "hyderabad";
// console.log(person);

// // function -> Common Task (group of Statement)

// // parameters -> in function declaration
// function sum(a, b) {
//     return a + b;
//   }

//   // 2,3 are arguments
//   sum(2, 3);

const captainAmerica = {
  name: "Steve Rogers",
  age: 102,
  allies: ["Tony", "Bruce", "Bucky"],
  address: {
    country: "USA",
    city: {
      name: "Brrokly",
      pincode: 12345,
    },
  },
  isAvenger: true,
  sayHi: function sayHi() {
    console.log("captain says HI");
  },
};

console.log(captainAmerica.sayHi());
