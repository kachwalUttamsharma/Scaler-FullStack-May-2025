import React from "react";

// named export
export const MyComponent = ({ message }) => {
  // console.log(props);
  // const message = props.message;
  return <h1>{message}</h1>;
};

export const MyComponent1 = ({ message }) => {
  return <h1>{message}</h1>;
};

// default export -> in 1 file there can be only 1 default export
// default is mandatory
// export default MyComponent;
