import { useState } from "react";
import "./App.css";
import RefExample from "./components/RefExample";
import Stopwatch from "./components/Stopwatch";
import Timer from "./components/Timer";
import Carousel from "./components/Carousel";
import UserList from "./components/UserList";
import PostsList from "./components/PostsList";
import useVisibility from "./customHook/useVisibility";
import Modal from "./components/Modal";

function App() {
  const { toggle, isVisible, hide, show } = useVisibility();
  return (
    <>
      {/* <RefExample /> */}
      {/* <Timer />
      <Timer />
      <Timer /> */}
      {/* {isVisible && <Stopwatch />} */}
      {isVisible && <Modal hide={hide} />}
      <button onClick={show}>Show Modal</button>
      {/* <button onClick={toggle}>Toggle</button> */}
      {/* <Carousel /> */}
      {/* <UserList />
      <PostsList /> */}
    </>
  );
}

export default App;
