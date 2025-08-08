function quickResolve() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Quickly resolved"), 1500);
  });
}

function slowResolveOrFastReject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Slowly resolved"), 2000);
    setTimeout(() => reject(new Error("Quickly rejected")), 1000);
  });
}

Promise.race([quickResolve(), slowResolveOrFastReject()])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

Promise.any([quickResolve(), slowResolveOrFastReject()])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
