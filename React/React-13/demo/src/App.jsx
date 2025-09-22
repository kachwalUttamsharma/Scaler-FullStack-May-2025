import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import HelloWorld from "./components/HelloWorld";
import TodoList from "./components/ToDoList";
import ToDoListF from "./components/ToDoListF";
import WithLoading from "./components/HOC/WithLoading";
import DataComponent from "./components/HOC/DataComponent";
import MyComponent from "./components/UseLoading";

function App() {
  const [show, setShow] = useState(true);

  const EnhancedComponent = WithLoading(DataComponent);
  return (
    <>
      {/* <HelloWorld name={"Prabhu"} />
      <Counter /> */}
      {/* {show && <ToDoListF />}
      <button onClick={() => setShow((prev) => !prev)}>Toggle</button> */}

      {/* <EnhancedComponent data="Here is some data!" /> */}
      <MyComponent data="Here is some data!" />
    </>
  );
}

export default App;
