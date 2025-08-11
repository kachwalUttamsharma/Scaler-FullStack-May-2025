const originalObj = {
  name: "Alice",
  details: {
    age: 30,
    hobbies: ["reading", "cycling", "hiking"],
  },
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  },
};

function deepClone(obj, copy) {
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    return obj;
  }
  if (obj instanceof Array) {
    copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepClone(obj[i], copy);
    }
    return copy;
  }
  if (obj instanceof Function) {
    return obj.bind(copy);
  }
  if (obj instanceof Object) {
    copy = {};
    for (let attr in obj) {
      copy[attr] = deepClone(obj[attr], copy);
    }
    return copy;
  }
  throw new Error("Unable to create copy");
}

const clonedObj = deepClone(originalObj);
// console.log(clonedObj);

// will fix
clonedObj.greet();
clonedObj.details.age = 31;

console.log(originalObj, clonedObj);
