import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "TodoSlice",
  initialState: {
    inputValue: "",
    todoList: [],
  },
  reducers: {
    setInputValue: (state, data) => {
      console.log(data);
      state.inputValue = data.payload;
    },
    addTask: (state, data) => {
      const currTask = data.payload;
      state.todoList.push(currTask);
      state.inputValue = "";
    },
    removeTask: (state, data) => {
      const currIndex = data.payload;
      state.todoList = state.todoList.filter(
        (task, index) => index != currIndex
      );
    },
  },
});

export const { setInputValue, addTask, removeTask } = TodoSlice.actions;

export default TodoSlice.reducer;
