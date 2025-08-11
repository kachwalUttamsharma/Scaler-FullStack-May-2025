const zoo = {
  name: "Amazing zoo",
  location: "Hyderabad, India",
  animals: [
    {
      species: "Lion",
      favoriteTreat: "Meat",
    },
    {
      species: "Panda",
      favoriteTreat: "Leaves",
    },
  ],
};

// number, string, boolean

const zoo1 = zoo;

// console.log(zoo === zoo1);

// zoo1.name = "amazing zoo1";

// console.log(zoo, zoo1);

// shallow copy

const shallowCopyZoo = { ...zoo };

shallowCopyZoo.name = "amazing zoo shallow copy";

// console.log(zoo, shallowCopyZoo);
console.log("========================");
shallowCopyZoo.animals.push({
  species: "birds",
  favoriteTreat: "fruits",
});

// console.log(zoo, shallowCopyZoo);

//Deep Copy

const a = 20;
let b = a;
// b = 30;
// console.log(a, b);

// clone - all nested level
// non - primitive into primitive data type

// pass by value vs pass by reference

const primitiveVersionOfZoo = JSON.stringify(zoo);
console.log(primitiveVersionOfZoo);
const deepCopy = JSON.parse(primitiveVersionOfZoo);
deepCopy.animals.push({
  species: "birds1",
  favoriteTreat: "fruits1",
});

console.log(zoo, deepCopy);

// doesnt work for function
