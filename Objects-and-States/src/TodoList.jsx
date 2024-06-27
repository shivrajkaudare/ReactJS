import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let Style = {
    height: "33px",
    width: "250px",
    borderRadius: "10px",
    color: "white",
  };

  let [todos, setTodo] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setnewTodo] = useState("");

  let addNewTask = () => {
    setTodo((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
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

  // Mark as done all task

  // updating all elements in array..
  let upperCaseAll = () => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  //   // Updating single element in array.
  // let UpperCaseTodo = (id) => {
  //   setTodo((prevTodos) =>
  //     prevTodos.map((todo) => {
  //       if (todo.id === id) {
  //         return {
  //           ...todo,
  //           task: todo.task.toUpperCase(),
  //         };
  //       }
  //     })
  //   );
  // };

  // mark task as done..
  // let MarkAsDone = (id) => {
  //   setTodo((prevTodos) =>
  //     prevTodos.map((todo) => {
  //       if (todo.id === id) {
  //         return {
  //           ...todo,
  //           isDone: true,
  //         };
  //       } else {
  //         return todo;
  //       }
  //     })
  //   );
  // };
  // Mark all atsk as done..
  let MarkAllDone = () => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) => {
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
            <span
              style={todo.isDone ? { textDecorationLine: "line-throught" } : {}}
            >
              {todo.task}
            </span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button> &nbsp;
            &nbsp; &nbsp;
            {<button onClick={() => MarkAsDone(todo.id)}>Mark As Done</button>}
            &nbsp; &nbsp;&nbsp; &nbsp;
            {/* <button onClick={() => UpperCaseTodo(todo.id)}>
              Upper Case task
            </button> */}
          </li>
        ))}
      </ul>
      <br></br>
      <button onClick={upperCaseAll}>Upper Case All</button>
    </div>
  );
}
