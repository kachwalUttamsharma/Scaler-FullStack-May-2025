import React from "react";
import "./App.css";
import A from "./components/A";
import B from "./components/B";
import C from "./components/C";
import D from "./components/D";
import ContextProviderComponent from "./context/contextProviderComponent";

function App() {
  return (
    <ContextProviderComponent>
      <A />
      <B />
      <C />
      <D />
    </ContextProviderComponent>
  );
}

export default App;
