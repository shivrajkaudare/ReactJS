import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let Style = {
    height: "33px",
    width: "250px",
    borderRadius: "10px",
    color: "white",
  };

  let [todos, setTodo] = useState([{ task: "sample task", id: uuidv4() }]);
  let [newTodo, setnewTodo] = useState("");

  let addNewTask = () => {
    setTodo((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setnewTodo("");
  };

  let updateTodoValue = (event) => {
    setnewTodo(event.target.value);
  };

  // delete task
  let deleteTodo = (id) => {
    setTodo((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  // updating all elements in array..
  let upperCaseAll = () => {
    setTodo((prevVal) =>
      prevVal.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  return (
    <div>
      <input
        placeholder="add a task"
        style={Style}
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <br></br>
      <br></br>
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr></hr>
      <h3>Tasks to do</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <br></br>
      <button onClick={upperCaseAll}>Upper Case All</button>
    </div>
  );
}
