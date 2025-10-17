import { Tabs } from "antd";
import React, { Children } from "react";
import TheatreList from "./TheatreList";

const Partner = () => {
  const items = [
    {
      key: "theatres",
      label: "Theatre",
      children: <TheatreList />,
    },
  ];
  return (
    <div style={{ margin: "20px", padding: "10px" }}>
      <h1>Partner Page</h1>
      <Tabs defaultActiveKey="theatres" items={items} />
    </div>
  );
};

export default Partner;
