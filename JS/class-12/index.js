function a() {
  const c = 10;
  function b() {
    return c + 10;
  }
  return b;
}

const z = a();
console.log(z());

// b();

// {
//   var a = 10;
//   let b = 20;
//   const c = 20;
//   console.log(b, c);
// }

// console.log(a);
// console.log(b);
