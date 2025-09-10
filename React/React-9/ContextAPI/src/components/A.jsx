import React, { useContext } from "react";
import { AppContext } from "../context/contextProviderComponent";

const A = () => {
  const { count } = useContext(AppContext);
  return <h2>Count: {count}</h2>;
};

export default A;
