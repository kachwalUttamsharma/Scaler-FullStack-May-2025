import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newToDo: "",
    };
    console.log("constructor is being called");
  }

  componentDidMount() {
    console.log("component did mount: // fetch the data");
    setTimeout(() => {
      this.setState({
        todos: ["Learn React", "Read a Book"],
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did updated: checking if new to-do was added.");
    console.log(prevProps);
    if (prevState.todos != this.state.todos) {
      console.log("Updated To-dos:", this.state.todos);
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount: cleaning up resources");
  }

  handleInputChange = (e) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos],
      newToDo: e.target.value,
    }));
  };

  handleAddTodo = () => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, this.state.newToDo],
      newToDo: "",
    }));
  };

  render() {
    return (
      <div>
        <h1>My To-DO List</h1>
        <input
          type="text"
          value={this.state.newToDo}
          onChange={(e) => this.handleInputChange(e)}
        />
        <button onClick={this.handleAddTodo}>Add To-Do</button>
        <ul>
          {this.state.todos?.map((todo, idx) => {
            return <li key={idx}>{todo}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
