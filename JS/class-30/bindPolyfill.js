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

Function.prototype.myBind = function (context = {}, ...argsValues) {
  if (typeof this !== "function") throw new Error("Not Callable");
  const printAllDetails = this;
  return function (...callArgs) {
    console.log(printAllDetails);
    context.fn = printAllDetails;
    context.fn(...argsValues, ...callArgs);
    delete context.fn;
  };
};

const allDetails = person2.printAllDetails.myBind(
  person,
  "Hyderabad",
  "cricket",
  "Running"
);

allDetails();
// allDetails();
// allDetails();
