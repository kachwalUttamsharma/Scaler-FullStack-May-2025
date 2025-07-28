// console.log(this); // {}
// this -> object or undefined

function fnGlobal() {
  console.log(this); // global
}

// fnGlobal();

const obj = {
  a: 12,
  fn: function () {
    console.log(this); // obj
  },
};

// obj.fn();

const obj2 = {
  b: 13,
  fn: function () {
    console.log(this); // obj2
    const nestedFunc = function () {
      console.log(this); // global
    };
    nestedFunc();
  },
};

obj2.fn();
