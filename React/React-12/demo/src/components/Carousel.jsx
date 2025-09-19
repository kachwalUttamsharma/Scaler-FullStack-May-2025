// Create a simple image carousel component in React that automatically cycles through a list of images,
//displaying one image at a time. The carousel should also allow users to manually navigate to the next
// or previous image using buttons.

// Features:
// Automatically cycles through images every 2 seconds.
// Manual navigation to the next or previous image using buttons.
// Displays image, title, and description for each item.

import React, { useEffect, useState } from "react";

const items = [
  {
    id: 1,
    imageUrl:
      "https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 1",
    description: "Description of item 1",
  },
  {
    id: 2,
    imageUrl:
      "https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 2",
    description: "Description of item 2",
  },
  {
    id: 3,
    imageUrl:
      "https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 3",
    description: "Description of item 3",
  },
];

const Carousel = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const token = setInterval(() => {
      nextClickHandler();
    }, 2000);

    return () => {
      console.log(token);
      clearInterval(token);
    };
  }, [currentIdx]);

  const prevClickHandler = () => {
    return currentIdx === 0
      ? setCurrentIdx(items.length - 1)
      : setCurrentIdx((prev) => prev - 1);
  };

  const nextClickHandler = () => {
    return currentIdx === items.length - 1
      ? setCurrentIdx(0)
      : setCurrentIdx((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={prevClickHandler}>Prev</button>
      <div>
        <img
          src={items[currentIdx]?.imageUrl}
          alt={items[currentIdx]?.title}
          style={{ borderRadius: "8px", width: "200px", height: "200px" }}
        />
        <h2>{items[currentIdx]?.title}</h2>
        <p>{items[currentIdx]?.description}</p>
      </div>
      <button onClick={nextClickHandler}>Next</button>
    </div>
  );
};

export default Carousel;
