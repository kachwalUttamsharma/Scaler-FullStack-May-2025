import React from "react";

const DisplayData = ({ fruits, person }) => {
  console.log(fruits, person);
  return (
    <div>
      <h2>Fruits List: </h2>
      <ul>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>

      <h2>Person Info: </h2>
      <p>Name: {person?.name}</p>
      <p>Age: {person?.age}</p>
    </div>
  );
};

export default DisplayData;

// rafce
