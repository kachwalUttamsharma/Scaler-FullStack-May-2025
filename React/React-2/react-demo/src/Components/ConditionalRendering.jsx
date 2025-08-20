import React from "react";

const ConditionalRendering = ({ isLoggedIn, name }) => {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome {name}</h1> : <h1>Please login to continue</h1>}
    </div>
  );
};

export default ConditionalRendering;
