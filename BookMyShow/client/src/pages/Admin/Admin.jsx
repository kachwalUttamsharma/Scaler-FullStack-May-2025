import { Tabs } from "antd";
import React, { Children } from "react";
import MovieTable from "./MovieTable";
import TheatreTable from "./TheatreTable";

const Admin = () => {
  const tabItems = [
    {
      key: "movies",
      label: "Movies",
      children: <MovieTable />,
    },
    {
      key: "theatre",
      label: "Theatres",
      children: <TheatreTable />,
    },
  ];
  return (
    <div style={{ margin: "20px", padding: "10px" }}>
      <h1>Admin Dashboard</h1>
      <Tabs defaultActiveKey="movies" items={tabItems} />
    </div>
  );
};

export default Admin;
