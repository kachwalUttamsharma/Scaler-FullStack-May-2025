// Create a random user generator using the "https://randomuser.me/api/" API.
// When a user clicks the "Get Random User" button,
// fetch user details and display them on the page, including:

// Full Name
// Email
// Country
// Handle API errors and provide appropriate feedback if the fetch fails.
const btn = document.getElementById("fetchUserBtn");
const nameElem = document.getElementById("userName");
const emailElem = document.getElementById("userEmail");
const countryElem = document.getElementById("userCountry");

async function fetchRandomUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    if (!response.ok) {
      throw new Error("Failed to fetch data ");
    }
    const data = await response.json();
    const userInfo = data.results[0];
    const fullname = `${userInfo?.name?.title} ${userInfo?.name?.first} ${userInfo?.name?.last}`;
    const email = userInfo?.email;
    const country = userInfo?.location?.country;
    nameElem.innerText = fullname;
    emailElem.innerText = email;
    countryElem.innerText = country;
    document.getElementById("userCard").style.display = "block";
  } catch (error) {
    window.alert("Error while fetching data ... ", error);
  }
}

btn.addEventListener("click", () => {
  fetchRandomUser();
});
