import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Users = () => {
  const [user, setUser] = useState(null);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${params?.id}`
        );
        const result = await response.json();
        setUser(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {user === null ? (
        <div>Loading...</div>
      ) : (
        <>
          <h4>{user?.name}</h4>
          <p>{user?.website}</p>
          <p>{user?.phone}</p>
        </>
      )}
    </div>
  );
};

export default Users;
