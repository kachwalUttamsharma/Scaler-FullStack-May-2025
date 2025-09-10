import React, { useContext } from "react";
import { AppContext } from "../context/contextProviderComponent";

const B = () => {
  const { setCount } = useContext(AppContext);
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
  );
};

export default B;
