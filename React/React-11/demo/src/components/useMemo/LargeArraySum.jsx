import React from "react";
import { useState, useMemo } from "react";

const generateLargeArray = () => {
  console.log("generateLargeArray");
  const largeArray = [];
  for (let i = 1; i <= 1000000; i++) {
    largeArray.push(i);
  }
  return largeArray;
};
const sumArray = (arr) => {
  console.log("sumarray");
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const LargeArraySum = () => {
  const [count, setCount] = useState(0);

  // we have to use it on compute intensive
  const largeArray = useMemo(() => generateLargeArray(), []);
  const sum = useMemo(() => sumArray(largeArray), [largeArray]);

  //   const largeArray = generateLargeArray();
  //   const sum = sumArray(largeArray);

  return (
    <div>
      <h1>{sum}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default LargeArraySum;
