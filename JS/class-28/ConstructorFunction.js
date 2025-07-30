//  {
//     size: "small",
//     crustType: "thin",
//     toppings: "veggies"
//  }
//  {
//     size: "medium",
//     crustType: "thin",
//     toppings: "veggies"
//  }

//  {
//     size: "small",
//     crustType: "thick",
//     toppings: "veggies",
//     func: () => {}
//  }
function Pizza(size, crustType, toppings) {
  this.toppings = toppings;
  this.crustType = crustType;
  this.size = size;
  this.describe = function () {
    console.log(
      `A ${this.size} pizza with ${this.toppings.join(", ")} on  a ${
        this.crustType
      } crust.`
    );
  };
  console.log("this : ", this);
}

const customerOrder = new Pizza("small", "thick", ["cheese", "peperoni"]);
const customerOrder1 = new Pizza("small", "thin", ["cheese", "peperoni"]);
console.log(customerOrder, customerOrder1);

customerOrder.describe();
customerOrder1.describe();
