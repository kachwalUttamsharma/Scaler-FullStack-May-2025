"use strict";

console.log(this); // window

function fnGlobal() {
  console.log(this); // undefined
}

fnGlobal();

const obj = {
  a: 12,
  fn: function () {
    console.log(this); // obj
  },
};

obj.fn();

const obj2 = {
  b: 13,
  fn: function () {
    console.log(this); // obj2
    const nestedFunc = function () {
      console.log(this); // undefined
    };
    nestedFunc();
  },
};

obj2.fn();
