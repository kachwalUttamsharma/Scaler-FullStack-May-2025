import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // callback func, dependency array
  console.log("before effect declared");

  useEffect(() => {
    console.log("will execute everytime component will mount");
  });
  useEffect(() => {
    console.log(
      "effect with dependency array only will execute when there is update in count"
    );
    document.title = `You clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    // this will execute only once when component is mounted
    const timer = setInterval(() => {
      console.log("Timer tick");
    }, 1000);
    console.log("timer flag: ", timer);

    // cleanup function
    // will execute when component is unmounted
    return () => {
      console.log(
        "clean up function is called : ",
        timer,
        " interval will be stopped"
      );
      clearInterval(timer);
    };
  }, []);

  console.log("after effect declared");
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Counter;
