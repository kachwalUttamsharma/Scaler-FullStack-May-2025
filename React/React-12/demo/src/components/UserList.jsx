import React from "react";
import useFetch from "../customHook/useFetch";

const UserList = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
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
        {data?.map((user, idx) => {
          return (
            <li key={idx}>
              <p>{user?.username}</p>
              <p>{user?.email}</p>
              <p>{user?.phone}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
