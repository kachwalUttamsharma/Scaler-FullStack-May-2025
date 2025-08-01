// const arr = [1, 2, 3];
// const person = {
//   name: "john",
// };

// console.log(arr);
// // arr -> prototype (array) -> prototype (object)
// console.log(person);
// // person -> prototype (object)
// console.log(person.hasOwnProperty("name"));
// console.log(person.hasOwnProperty("age"));

// 1st version
// function Car(model, year) {
//   this.model = model;
//   this.year = year;
//   this.displayInfo = function () {
//     return `This is a ${this.year} ${this.model}.`;
//   };
// }

// // 10,000 objects
// const car1 = new Car("Toyota Camry", 2021);
// const car2 = new Car("Tata Nexon", 2024);

// console.log(car1);
// console.log(car2);

// console.log(car1.displayInfo());
// console.log(car2.displayInfo());

// 2nd version
// function Car(model, year) {
//   this.model = model;
//   this.year = year;
// }

// Car.prototype.displayInfo = function () {
//   return `This is a ${this.year} ${this.model}.`;
// };

// Car.prototype.__proto__.displayGenericInfo = function () {
//   return `This is a car from year ${this.year}`;
// };

// const car1 = new Car("Toyota Camry", 2021);
// const car2 = new Car("Tata Nexon", 2024);

// console.log(car1);
// console.log(car2);

// console.log(car1.displayInfo());
// console.log(car2.displayInfo());

// __proto__ vs prototype

// {}
// constructor function
// class

// Object.create

// 2 params
// Object.create(prototype, [properties])

const carPrototype = {
  displayInfo: function () {
    return `This is a ${this.year} ${this.model}.`;
  },
};

const car1 = Object.create(carPrototype);
car1.model = "2023";
car1.name = "Mustang";
console.log(car1);

const car2 = Object.create(carPrototype);
car2.model = "2024";
car2.name = "Verna";
console.log(car2);

// some extra key value pairs H.W
const car3 = Object.create(carPrototype, {
  model: { value: "2025" },
  name: { value: "creta" },
});

console.log(car3);
