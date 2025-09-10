import React, { useContext } from "react";
import { AppContext } from "../context/contextProviderComponent";

const C = () => {
  const { theme } = useContext(AppContext);
  return <h2>Theme: {theme}</h2>;
};

export default C;
