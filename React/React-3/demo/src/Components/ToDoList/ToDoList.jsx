import React from "react";
import { useState } from "react";

const ToDoList = () => {
  const [taskVal, setTaskVal] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (taskVal.trim().length > 0) {
      setTasks((prevTask) => {
        return [...prevTask, taskVal.trim()];
      });
      setTaskVal("");
    } else {
      window.alert("Please enter task info");
    }
  };

  const removeTask = (index) => {
    setTasks((tasks) => tasks.filter((task, i) => i !== index));
  };
  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={taskVal}
        onChange={(e) => setTaskVal(e.target.value)}
        placeholder="Enter Task...."
        style={{ marginRight: "10px", padding: "10px" }}
      />
      <button onClick={addTask}>Add Task</button>
      <ul style={{ margin: "20px" }}>
        {tasks?.map((task, index) => {
          return (
            <li key={index} style={{ margin: "5px" }}>
              {task}
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  removeTask(index);
                }}
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
