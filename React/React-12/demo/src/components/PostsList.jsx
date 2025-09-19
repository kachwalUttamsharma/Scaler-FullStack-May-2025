import React from "react";
import useFetch from "../customHook/useFetch";

const PostsList = () => {
  const { loading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (error?.length > 0) {
    return <div>something went wrong : {error}</div>;
  }

  if (loading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <ul>
        {data?.map((post, idx) => {
          return (
            <li key={idx}>
              <p>{post?.userId}</p>
              <p>{post?.title}</p>
              <p>{post?.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostsList;
