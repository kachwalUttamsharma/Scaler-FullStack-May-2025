import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inre_decre, setIncreDement] = useState(1);
  const addClickHandler = () => {
    // setCount(count + inre_decre);
    setCount((prevStateValueForCount) => {
      return prevStateValueForCount + inre_decre;
    });
  };
  const subtractClickHandler = () => {
    setCount((prevStateValueForCount) => {
      return prevStateValueForCount - inre_decre;
    });
  };
  const resetClickHandler = () => {
    setCount(0);
  };
  const increment_decrementHandler = (e) => {
    setIncreDement(parseInt(e.target.value));
  };
  return (
    <div className="container">
      <h1>Counter</h1>
      <div id="number">{count}</div>
      <div>
        Increment/Decrement By
        <input
          type="number"
          id="increment_decrement"
          value={inre_decre}
          onChange={increment_decrementHandler}
        />
      </div>
      <div>
        <button id="add" onClick={addClickHandler}>
          +
        </button>
        <button id="subtract" onClick={subtractClickHandler}>
          -
        </button>
      </div>
      <button id="reset" onClick={resetClickHandler}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
