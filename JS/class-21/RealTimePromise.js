// if you clean the room and remove the garbage then you will get ice cream

const cleanRoom = function () {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      resolve("cleaned the room");
    } else {
      reject("Failed to clean the room");
    }
  });
};

// cleanRoom().then((result) => {
//   console.log(result);
// });

const removeGarbage = function (message) {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      resolve(message + " then removed garbage");
    } else {
      reject("Failed to remove garbage");
    }
  });
};

// removeGarbage().then((result) => {
//   console.log(result);
// });

const winIceCream = function (message) {
  return new Promise((resolve, reject) => {
    resolve(message + " then won icecream");
  });
};

// winIceCream().then((result) => {
//   console.log(result);
// });

cleanRoom()
  .then(function (result) {
    return removeGarbage(result);
  })
  .then(function (result) {
    return winIceCream(result);
  })
  .then(function (result) {
    console.log("finished " + result);
  })
  .catch(function (error) {
    console.log(error);
  });
