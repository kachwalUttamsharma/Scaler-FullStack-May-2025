// class -> blueprint of an object

// class Myclass {
//   // properties associated with object need to be declared here
//   constructor() {
//     // intialised here
//   }

//   myMethod() {}
//   static myStaticMethod() {
//     console.log("mystaticMethod");
//   }
// }

// // static methods - they belong class not to object
// Myclass.myStaticMethod();

class Pizza {
  static totalPizzasMade = 0; // static property belong class
  constructor(size, crustType, toppings) {
    this.toppings = toppings;
    this.crustType = crustType;
    this.size = size;
    Pizza.totalPizzasMade++;
  }
  describe() {
    console.log(
      `A ${this.size} pizza with ${this.toppings.join(", ")} on  a ${
        this.crustType
      } crust.`
    );
  }

  static calculateTotalPizzaMade() {
    console.log(`Total pizzas made: ${Pizza.totalPizzasMade}`);
  }
}

// class
// constructor
// extends
// super
class StuffedPizza extends Pizza {
  constructor(size, crustType, toppings, stuffyingType) {
    super(size, crustType, toppings); // call the parent class constructor with super
    this.stuffyingType = stuffyingType;
  }

  describeStuffing() {
    console.log(`This pizza has ${this.stuffyingType} stuffing in the crust.`);
  }

  // overriding a function
  describe() {
    super.describe();
    this.describeStuffing();
  }
}

const customerOrder = new Pizza("small", "thick", ["cheese", "peperoni"]);
const customerOrder1 = new Pizza("small", "thin", ["cheese", "peperoni"]);
const specialOrders = new StuffedPizza(
  "small",
  "thick",
  ["cheese", "peperoni"],
  "cheese and garlic"
);

Pizza.calculateTotalPizzaMade();

console.log(customerOrder);
console.log(
  customerOrder.toppings,
  customerOrder.crustType,
  customerOrder.size
);
