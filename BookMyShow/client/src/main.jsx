import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51O5zcBSBDTkZoZSYLMhGUO2MTmaOGJ2zaVA8RuqLn35meiJiQUAzM8HKHgNYXJAGnRSf335yH7rYZQCJ8G6uPIrU00VLrpUJX9"
);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </Provider>
);
