import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { message } from "antd";
import { GetCurrentUser } from "../api/user";
const Home = () => {
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  const getValidUser = async () => {
    try {
      const response = await GetCurrentUser();
      if (response.success) {
        setUserInfo(response?.data);
      }
    } catch (error) {
      message.error(error);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("tokenForBMS")) {
      // token is present
      getValidUser();
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <div>Home</div>
      <div>Hello : {userInfo?.name}</div>
      <div>Email : {userInfo?.email}</div>
      <Link
        to="/login"
        onClick={() => {
          localStorage.removeItem("tokenForBMS");
        }}
      >
        Logout
      </Link>
    </>
  );
};

export default Home;
