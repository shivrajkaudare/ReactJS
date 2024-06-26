export default function TodoList() {
  let Style = {
    height: 33,
    width: 250,
    borderRadius: 10,
  };
  return (
    <div>
      <input placeholder="add a task" style={Style}></input>
      <br></br>
      <br></br>
      <button>Add Task</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr></hr>
      <h3>Tasks to do</h3>
      <ul></ul>
    </div>
  );
}
