import React, { useEffect, useState } from "react";

const ToDoListF = () => {
  const [todos, SetToDos] = useState([]);
  const [newToDo, setNewToDo] = useState("");

  useEffect(() => {
    console.log("component did mount: // fetch the data");
    setTimeout(() => {
      SetToDos(["Learn React", "Read a Book"]);
    }, 1000);

    return () => {
      console.log("Component will unmount: cleaning up resources");
    };
  }, []);

  useEffect(() => {
    console.log("Component did updated: checking if new to-do was added.");
    console.log("updated ToDOs", todos);
  }, [todos]);

  const handleInputChange = (e) => {
    setNewToDo(e.target.value);
  };

  const handleAddTodo = () => {
    SetToDos((prevState) => [...prevState, newToDo]);
    setNewToDo("");
  };
  return (
    <div>
      <h1>My To-DO List</h1>
      <input
        type="text"
        value={newToDo}
        onChange={(e) => handleInputChange(e)}
      />
      <button onClick={handleAddTodo}>Add To-Do</button>
      <ul>
        {todos?.map((todo, idx) => {
          return <li key={idx}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};

export default ToDoListF;
