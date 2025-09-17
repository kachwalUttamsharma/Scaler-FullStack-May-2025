import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import App3 from "./App3";

createRoot(document.getElementById("root")).render(
  <Router>
    <App3 />
  </Router>
);
