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

person2.printAllDetails.call(person, "Hyderabad", "cricket", "Running");

// myCall

// rest operator -> n parameter - into array of size n with all those values
Function.prototype.myCall = function (context = {}, ...argsValues) {
  console.log(this); // ? print all details
  // currently this is point to (printAlldetails)
  // it should point to context
  // context -> {}, person
  if (typeof this !== "function") throw new Error("Not Callable");
  context.fn = this;
  context.fn(...argsValues);
  delete context.fn;
};

person2.printAllDetails.myCall(person, "Hyderabad", "cricket", "Running");
