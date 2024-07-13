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
    // reducer for adding new todo.
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo); // direct mutation of array but in react we have to destructure array.
    },
    // reducer for delete todo
    deleteDodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    marksAsDone: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id == action.payload) {
          todo.isDone = true;
        }
      });
    },
  },
});

// equating  all reducers to let redux toolkit know for generating action creators.
export const { addTodo, deleteDodo, marksAsDone } = todoSlice.actions;

export default todoSlice.reducer;
