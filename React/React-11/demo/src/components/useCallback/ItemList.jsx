import React, { useState } from "react";
import { useCallback } from "react";

const ItemList = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [counter, setCounter] = useState(0);

  const removeItem = useCallback((itemToRemove) => {
    setItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
  }, []);

  //   const removeItem = (itemToRemove) => {
  //     setItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
  //   };

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      <RenderList items={items} removeItem={removeItem} />
    </div>
  );
};

const RenderList = React.memo(({ items, removeItem }) => {
  console.log("renderlist");
  return (
    <>
      {items?.map((item) => (
        <div key={item}>
          {item}
          <button onClick={() => removeItem(item)}>Remove</button>
        </div>
      ))}
    </>
  );
});

export default ItemList;

// applicable to functions only
// usecallback -> caches the function defination/address
// usememo -> caches the function return value
// memo -> caches the component itself
