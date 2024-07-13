import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteDodo } from "../features/todo/todosSlice";
import { marksAsDone } from "../features/todo/todosSlice";

export default function Todo() {
  // return todos from store using useSelector hook
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    console.log("delete", id);
    dispatch(deleteDodo(id));
  };

  const markAsDoneHandler = (id) => {
    console.log("mark as done", id);
    dispatch(marksAsDone(id));
  };

  return (
    <>
      <h2>Todo List APP</h2>
      <AddForm />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
          >
            {todo.task}
            <button onClick={() => clickHandler(todo.id)}>Delete</button>
            <button onClick={() => markAsDoneHandler(todo.id)}>
              Mark as Done
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
