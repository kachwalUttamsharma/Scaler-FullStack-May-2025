import React from "react";
import "./Counter.css";

const Counter = () => {
  let count = 0;
  const addClickHandler = (e) => {
    console.log("addClickHandler is called");
    count++;
    console.log(count);
  };
  const subtractClickHandler = () => {
    console.log("subtractClickHandler is called");
    count--;
    console.log(count);
  };
  const resetClickHandler = () => {
    console.log("resetClickHandler is called");
    count = 0;
    console.log(count);
  };
  const increment_decrementHandler = () => {};
  return (
    <div class="container">
      <h1>Counter</h1>
      <div id="number">{count}</div>
      <div>
        Increment/Decrement By
        <input
          type="number"
          id="increment_decrement"
          value="1"
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
