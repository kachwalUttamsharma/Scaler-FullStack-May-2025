import React, { useContext } from "react";
import { AppContext } from "../context/contextProviderComponent";

const D = () => {
  const { setTheme } = useContext(AppContext);
  return (
    <button onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}>
      Toggle Theme
    </button>
  );
};

export default D;
