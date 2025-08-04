"use strict";
console.log(this);

// const printAllDetails = () => {
//   console.log(
//     `My name is ${this.firstName} ${this.lastName}, I am ${this.age} years old and you can reach me out at ${this.contact}`
//   );
// };

const person = {
  firstName: "Jaya",
  lastName: "Surya",
  age: 23,
  contact: "XXXXXXXX345",
  describe: function () {
    console.log(`describe function from person and this refer to `, this);
  },
};

const person2 = {
  firstName: "Prabhu",
  lastName: "Sundar",
  age: 26,
  contact: "XXXXXXXX235",
  printAllDetails: function (city, hobby1, hobby2) {
    console.log("this : ", this);
    console.log(
      `My name is ${this.firstName} ${this.lastName}, I am ${this.age} years old and you can reach me out at ${this.contact} and I live in ${city} and My hobbies ${hobby1} ${hobby2}`
    );
  },
};

// person2.printAllDetails("Hyderabad"); // person

// // function borrowing
// // changing the context of this words

// person2.printAllDetails.call(person, "Hyderabad"); // person2

// person.describe();
// person.describe.call(person2);
// person.describe.apply(person2);

person2.printAllDetails("Hyderabad", "cricket", "Running");
person2.printAllDetails.call(person, "Hyderabad", "cricket", "Running");
person2.printAllDetails.apply(person, ["Hyderabad", "cricket", "Running"]);

const numbers = [5, 3, 6, 7, 3, 9, 10];

console.log(Math.max(numbers));
const max = Math.max.apply(null, numbers);
console.log(max);

const allDetails = person2.printAllDetails.bind(
  person,
  "Hyderabad",
  "cricket",
  "Running"
);

allDetails();
allDetails();
allDetails();

// call, apply, bind -> changing the context this (function borrowing)
// call -> takes comma separeted values as arguments
// apply -> takes array of values as arguments
// bind -> return a function that can be called multiple times and it takes comma separeted values as arguments
