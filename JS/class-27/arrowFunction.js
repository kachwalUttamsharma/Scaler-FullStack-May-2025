const fn = () => {
  console.log(this); // {}
};

fn();

const obj = {
  a: 12,
  fn: () => {
    console.log(this);
  },
};

obj.fn(); // {}

const obj2 = {
  b: 13,
  fn: () => {
    console.log(this); // {}
    const nestedFunc = () => {
      console.log(this); // {}
    };
    nestedFunc();
  },
};

obj2.fn();

const obj3 = {
  b: 13,
  fn: function () {
    console.log(this); // obj3
    const nestedFunc = () => {
      console.log(this); // obj3
    };
    nestedFunc();
  },
};

obj3.fn();
