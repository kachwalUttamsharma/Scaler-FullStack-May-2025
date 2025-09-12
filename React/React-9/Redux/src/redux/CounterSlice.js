import { createSlice } from "@reduxjs/toolkit";

// 1. createSlice()
// - A slice is a combination of:
//   (a) slice name (used for identifying actions in Redux DevTools),
//   (b) initial state,
//   (c) reducer functions (how the state should be updated).
// - Each reducer function here is responsible for updating a small
//   portion of state in response to an action.
const CounterSlice = createSlice({
  name: "counterSlice", // unique name for slice
  initialState: {
    count: 0, // state managed by this slice
  },
  reducers: {
    // Reducer functions:
    // Each reducer takes (state, action) and updates state.

    // increment action -> increases count by 1
    increment: (state) => {
      state.count += 1;
    },

    // decrement action -> decreases count by 1
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// Logging the slice shows what createSlice generates:
// - slice.reducer (the reducer function we’ll give to the store)
// - slice.actions (action creators like increment(), decrement())
// - slice.name
// console.log(CounterSlice);
// console.log(CounterSlice.reducer);

// 2. Extract the action creators generated for each reducer function
export const { increment, decrement } = CounterSlice.actions;

// 3. Export only the reducer function to give to the store.
// - Notice: CounterSlice.reducer is a SINGLE reducer function
//   that handles all actions defined inside this slice.
// - This reducer will be combined with other slice reducers
//   inside the centralized store.
export default CounterSlice.reducer;
