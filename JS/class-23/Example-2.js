// Task:
// Fetch a random cat fact from "https://catfact.ninja/fact" and log it.
// Use promise chaining to handle the fetch request. Log any errors that occur.

// function fetchCatFact() {
//   fetch("https://catfact.ninja/fact")
//     .then((result) => result.json())
//     .then((res) => console.log(res))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("data is fetched"));
// }

// fetchCatFact();

async function fetchCatFact1() {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    console.log("response  : ", response);
    const res = await response.json();
    console.log("res : ", res);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("data is fetched");
  }
}

fetchCatFact1();
