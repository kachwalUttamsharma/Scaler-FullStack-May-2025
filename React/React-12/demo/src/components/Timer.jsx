import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  // between multiple re-render (doesnt cause re-render) and
  // also it remember the value between re-render
  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  }, []);
  return (
    <div>
      <p>Seconds: {seconds}</p>
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        Stop Timer
      </button>
    </div>
  );
};

export default Timer;
