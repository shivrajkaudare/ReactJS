import Counter from "./Counter";
import "./App.css";

function App() {
  return (
    <>
      <h1>States in React</h1>
      <Counter />
      <button onClick={incCount}>Increase Counter</button>
    </>
  );
}

export default App;
