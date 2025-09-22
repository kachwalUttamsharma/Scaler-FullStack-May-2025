import { useEffect, useState } from "react";

const UseLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return isLoading;
};

const MyComponent = (props) => {
  const isLoading = UseLoading();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <div>Data Loaded {props.data}</div>;
};

export default MyComponent;
