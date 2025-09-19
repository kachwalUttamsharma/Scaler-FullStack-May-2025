// Create a stopwatch application using React.
// The stopwatch should have the following features:

// Start the timer.
// Stop the timer.
// Reset the timer.
// Display the elapsed or current time in a format of hours:minutes:seconds.
// 00:00:00
// 00:00:01

import React, { useState, useRef, useCallback, useEffect } from "react";

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      setIsRunning(true);
      console.log("setInterval is being called");
      setTimer((prev) => prev + 1);
    }, 1000);
  }, []);

  const stopTimer = useCallback(() => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  }, []);

  const resetTimer = useCallback(() => {
    setTimer(0);
    setIsRunning(false);
    clearInterval(timerRef.current);
  }, []);

  const formatTime = useCallback((seconds) => {
    // 00:00:00
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const getMinutes = `0${Math.floor(seconds / 60)}`.slice(-2);
    const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  }, []);

  return (
    <div>
      <h1>{formatTime(timer)}</h1>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={resetTimer} disabled={timer === 0 ? true : false}>
        Reset
      </button>
    </div>
  );
};

export default Stopwatch;
