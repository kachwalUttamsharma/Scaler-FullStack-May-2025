import React, { useRef } from "react";

const RefExample = () => {
  const inputRef = useRef(null);
  const focusInput = () => {
    // document.querySelector("input").focus();
    console.log(inputRef?.current);
    inputRef?.current?.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default RefExample;
