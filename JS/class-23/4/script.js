// Fetch Multiple Dog Images (Promise.all())
// Build a simple dog image gallery that fetches three random dog images
// from "https://dog.ceo/api/breeds/image/random" in parallel using a Promise method.
// Clicking the "Get Dogs" button should display three new random images in the UI.
// Clear previous images before displaying new ones.
// Handle errors if fetching fails.
const btn = document.getElementById("fetchDogsBtn");

const fetchDogs = async () => {
  try {
    const urls = [
      "https://dog.ceo/api/breeds/image/random",
      "https://dog.ceo/api/breeds/image/random",
      "https://dog.ceo/api/breeds/image/random",
    ];
    const response = await Promise.all(urls.map((url) => fetch(url)));
    const data = await Promise.all(response.map((res) => res.json()));
    console.log(data);
    const container = document.getElementById("dogContainer");
    container.innerHTML = "";
    data.forEach((dog) => {
      const img = document.createElement("img");
      img.src = dog?.message;
      container.appendChild(img);
    });
  } catch (erorr) {
    window.alert("error : ", erorr);
  } finally {
    console.log("execution completed");
  }
};

btn.addEventListener("click", () => {
  fetchDogs();
});
