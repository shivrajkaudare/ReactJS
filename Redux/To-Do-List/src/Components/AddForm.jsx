import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todosSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispach = useDispatch();

  const submitHandler = (evt) => {
    evt.preventDefault();
    console.log(task);
    dispach(addTodo(task));
    setTask("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={(e) => setTask(e.target.value)}></input>
        <button>Add Task</button>
      </form>
    </>
  );
}
