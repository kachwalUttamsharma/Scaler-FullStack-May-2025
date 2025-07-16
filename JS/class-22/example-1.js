// cafe -> getMenu -> put order -> served -> generate bill -> payment -> exit

const menuItems = ["Tea", "Coffee", "MilkShakes", "Biscuists"];

console.log("before");
function getMenu(time) {
  console.log("I have entered the cafe");
  const isCafeOpen = time >= 6 && time <= 10 ? true : false;
  const menu = new Promise((resolve, reject) => {
    console.log("I have asked for the menu");
    if (isCafeOpen) {
      resolve({
        menuItems,
        status: "Menu is shared or given",
      });
    } else {
      reject("Cafe is Closed, can you come back between 6 and 10");
    }
  });
  return menu;
}

function placeAnOrder(item1, item2) {
  const orderStatus = new Promise((resolve, reject) => {
    if (menuItems.includes(item1) && menuItems.includes(item2)) {
      resolve(`Order has been placed for ${item1} and ${item2}`);
    } else {
      reject("One of the items or all items are not available");
    }
  });
  return orderStatus;
}

function serve() {
  const servingOrder = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Order is served, enjoy your time");
    }, 5000);
  });
  return servingOrder;
}

function generateBill() {
  const bill = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pay the bill of 500 rupees");
    }, 2000);
  });
  return bill;
}
console.log("after");

getMenu(10)
  .then((menu) => {
    console.log(menu);
    return placeAnOrder("Tea-1", "Biscuists");
  })
  .then((orderStatus) => {
    console.log(orderStatus);
    return serve();
  })
  .then((orderIsBeingServer) => {
    console.log(orderIsBeingServer);
    console.log("consumed the items");
    return generateBill();
  })
  .then((bill) => {
    console.log(bill);
    console.log("Payment is done");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Thank you for visiting us, and keep coming");
  });
