import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import ToDoSlice from "./TodoSlice";
import UserSlice from "./UserSlice";

// Store in Redux = Centralized container holding application state
// - configureStore() accepts an object with all reducers
// - The "reducer" field can combine multiple slice reducers

// IMPORTANT Terminology Clarification:
//
// reducer (lowercase singular):
//   A single function that handles state updates for one slice.
//
// reducers (plural inside createSlice):
//   An object where each key is a function describing how to update state
//   in response to a specific action (e.g., increment, decrement).
//
// store.reducer:
//   The combined reducer object passed into configureStore.
//   It holds all slice reducers and delegates actions to the correct slice.

const store = configureStore({
  reducer: {
    // "counter" here becomes the key in the global state object.
    // That means global state will look like:
    // { counter: { count: 0 } }
    counter: CounterSlice,
    toDo: ToDoSlice,
    user: UserSlice,
  },
});

export default store;
