// 1. __proto__ to null
// const obj = { name: "ramu" };
// console.log(obj);
// obj.__proto__ = null;
// try {
//   console.log(obj.toString());
// } catch (error) {
//   console.log("error : ", error);
// }

// function Animal() {}
// Animal.prototype.speak = function () {
//   console.log("Sound!");
// };

// function Dog() {}
// // Dog.prototype.speak = function () {
// //   console.log("Bow Bow !...");
// // };

// Dog.prototype = Object.create(Animal.prototype, {
//   speak: {
//     value: function () {
//       console.log("Bow Bow !...");
//     },
//   },
// });
// Dog.prototype.constructor = Dog;

// // Animal -> Dog
// const animal = new Animal();
// console.log(animal);

// const dog = new Dog();
// console.log(dog);

// Circular Prototype Chain
// function A() {}
// function B() {}

// // A.prototype = B;
// // B.prototype = A;

// const a = new A();
// const b = new B();

// A.prototype = b;
// B.prototype = a;

// console.log(A.prototype);
// console.log(B.prototype);

// function Cat(name) {
//   this.name = name;
// }

// const cat1 = new Cat("Fluffy");
// console.log(cat1);
// console.log("cat1proto", cat1.__proto__);
// cat1.__proto__ = { age: 5 };
// console.log(cat1.age);
// console.log(cat1.__proto__ === Cat.prototype);

// Constructor function for Person
function Person(name) {
  this.name = name;
}

// Prototype for Person
Person.prototype.introduce = function () {
  return `Hi, I'm ${this.name}.`;
};

const person1 = new Person("John");
const person2 = new Person("Jane");

console.log(person1.introduce());
console.log(person2.introduce());
