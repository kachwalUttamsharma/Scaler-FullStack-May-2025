import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/CounterSlice";

const CounterRedux = () => {
  // current state value consumption
  const { count } = useSelector((store) => store.counter);

  // to call action you have dispatch an action
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <button onClick={handleIncrement}> + </button>
      <h3>{count}</h3>
      <button onClick={handleDecrement}> - </button>
    </>
  );
};

export default CounterRedux;
