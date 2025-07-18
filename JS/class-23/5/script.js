// Task
// Implement an API retry mechanism where a request to an
// invalid API (https://jsonplaceholder.typicode.com/invalid) is attempted
// up to 3 times before showing an error message.
// Clicking "Retry Fetch" should attempt to fetch the API. The status should be updated in
//  real-time for each attempt on the page.
// If the request fails, retry up to 3 times before displaying a failure message.
// Show real-time status updates on the page for each attempt.

const btn = document.getElementById("retryFetchBtn");

const fetchWithRetry = async (url, retries) => {
  const statusElem = document.getElementById("status");
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Attempt ${attempt} Failed`);
      }
      const data = await response.json();
      statusElem.innerText = data;
      return data;
    } catch (error) {
      console.log(error);
      statusElem.innerText = `${error}`;
      if (attempt === retries) {
        statusElem.innerText = "All attempts failed";
      }
    }
  }
};

btn.addEventListener("click", () => {
  // fetchWithRetry("https://jsonplaceholder.typicode.com/invalid", 3);
  fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1", 3);
});
