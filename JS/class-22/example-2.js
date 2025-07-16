const POST_URL = "https://jsonplaceholder.typicode.com/posts/1";
const COMMENT_URL = "https://jsonplaceholder.typicode.com/comments/1";
const USER_URL = "https://jsonplaceholder.typicode.com/users/1";

const myFetchUrls = (url) => {
  return fetch(url).then((data) => data.json());
};

// parallel calls
// const fetchPost = myFetchUrls(POST_URL);
// fetchPost.then((data) => console.log("post : ", data));
// const fetchUser = myFetchUrls(USER_URL);
// fetchUser.then((data) => console.log("user : ", data));
// const fetchComment = myFetchUrls(COMMENT_URL);
// fetchComment.then((data) => console.log("comment : ", data));

// serial

// myFetchUrls(POST_URL)
//   .then((data) => {
//     console.log("post : ", data);
//     return myFetchUrls(COMMENT_URL);
//   })
//   .then((data) => {
//     console.log("comments: ", data);
//     return myFetchUrls(USER_URL);
//   })
//   .then((data) => {
//     console.log("users : ", data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("excution is completed");
//   });

// series
async function getAllInfo() {
  try {
    const userData = await myFetchUrls(USER_URL);
    const postData = await myFetchUrls(POST_URL);
    const commentsData = await myFetchUrls(COMMENT_URL);
    console.log(userData, postData, commentsData);
  } catch {
    (error) => {
      console.log(error);
    };
  } finally {
    () => {
      console.log("excution is completed");
    };
  }
}

getAllInfo();

// parallel
