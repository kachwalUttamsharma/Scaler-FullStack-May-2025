// Create a function fakeDownload(url, callback)
// that simulates downloading a file from a URL. The function should:

// Log "Downloading from [url]...".
// Wait 2 seconds.
// Call the callback function with "Download complete!".

function fakeDownload(url, callback) {
  console.log(`Downloading from [${url}]....`);

  setTimeout(() => {
    callback("Download Complete");
  }, 2000);
}

fakeDownload("https://example.come/file", (message) => {
  console.log(message);
});

// Take the fakeDownload function and refactor
// it to return a Promise instead of using a callback.

function fakeDownloadPromise(url) {
  console.log(`Downloading from [${url}]....`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Download Complete");
    }, 2000);
  });
}

fakeDownloadPromise("https://example.come/file").then((message) =>
  console.log(message)
);

// async await
// consume
async function startDownload() {
  try {
    const result = await fakeDownloadPromise("https://example.come/file");
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

const data = startDownload();
console.log("data : ", data);
