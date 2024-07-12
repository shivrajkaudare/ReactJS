import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid- is a library for generate random ids like UUID
// initial state.
const initialState = {
  todos: [{ id: "abc", task: "demo-task", isDone: false }],
};

// Creating Slice- bundle of Actions and Reducers.
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo);
    },
  },
});
