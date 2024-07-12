import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todosSlice";

export const store = configureStore({
  reducer: todoReducer,
});
