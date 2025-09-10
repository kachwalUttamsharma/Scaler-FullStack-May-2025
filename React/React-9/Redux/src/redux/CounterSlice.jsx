import { createSlice } from "@reduxjs/toolkit";

// 1. create a slice == state & its update functions
const CounterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

console.log(CounterSlice);

// 2. extract the update/action function from slice
export const { increment, decrement } = CounterSlice.actions;

// 3. export reducer from slice
export default CounterSlice.reducer;
