import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterRedux from "./components/CounterRedux";
import ToDoList from "./components/ToDoList";
import User from "./components/User";
import UserRedux from "./components/UserRedux";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <CounterRedux />
      <ToDoList /> */}
      <UserRedux />
    </>
  );
}

export default App;
