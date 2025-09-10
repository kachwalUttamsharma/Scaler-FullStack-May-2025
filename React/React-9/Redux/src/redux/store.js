import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";

// this is the centralized store which stores all reducers/slices/states
const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;
