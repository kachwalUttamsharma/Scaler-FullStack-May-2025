class Pizzas {
  static totalPizzasMade = 0;
  #toppings;
  #size;
  #crustType;
  constructor(size, crustType, toppings) {
    this.#toppings = toppings;
    this.#crustType = crustType;
    this.#size = size;
    Pizzas.totalPizzasMade++;
  }
  describe() {
    console.log(
      `A ${this.#size} pizza with ${this.#toppings.join(", ")} on  a ${
        this.#crustType
      } crust.`
    );
  }

  static calculateTotalPizzaMade() {
    console.log(`Total pizzas made: ${Pizzas.totalPizzasMade}`);
  }

  //getter
  get toppings() {
    return this.#toppings;
  }
  get size() {
    return this.#size;
  }

  get crustType() {
    return this.#crustType;
  }

  //setters
  set size(newSize) {
    this.#size = newSize;
  }

  set crustType(newCrustType) {
    this.#crustType = newCrustType;
  }

  set toppings(newToppings) {
    this.#toppings = newToppings;
  }
}

class StuffedPizza extends Pizzas {
  #stuffyingType;
  constructor(size, crustType, toppings, stuffyingType) {
    super(size, crustType, toppings);
    this.#stuffyingType = stuffyingType;
  }

  describeStuffing() {
    console.log(`This pizza has ${this.#stuffyingType} stuffing in the crust.`);
  }
  get stuffyingType() {
    return this.#stuffyingType;
  }

  set stuffyingType(newStuffyingType) {
    this.#stuffyingType = newStuffyingType;
  }

  describe() {
    super.describe();
    this.describeStuffing();
  }
}

const customerOrder = new Pizzas("small", "thick", ["cheese", "peperoni"]);
console.log(customerOrder);
console.log(
  customerOrder.toppings,
  customerOrder.crustType,
  customerOrder.size
);
console.log(customerOrder.describe());

const specialOrders = new StuffedPizza(
  "small",
  "thick",
  ["cheese", "peperoni"],
  "cheese and garlic"
);

console.log(specialOrders);
specialOrders.describe();
console.log(specialOrders.stuffyingType);
specialOrders.stuffyingType = "veggies";
console.log(specialOrders.stuffyingType);
