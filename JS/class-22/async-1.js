const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise rejected");
  }, 5000);
});

// promise.catch((err) => console.log(err));

async function fn() {
  try {
    console.log("before");
    const p = await promise;
    console.log(p);
    console.log("after");
  } catch (error) {
    console.log(error);
  }
}

fn();
