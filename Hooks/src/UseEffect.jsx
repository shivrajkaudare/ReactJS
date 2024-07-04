import { useState, useEffect } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  let incCount = () => {
    setCount((currCount) => currCount + 1);
  };
  // there are three way to use UseEffect()
  // this useEffecct function execute everytime when component re-renders
  useEffect(function printSomething() {
    console.log("This is a side-effect");
  });

  // Using dependencies (dependencies are nothing but state variables).
  return (
    <div>
      <h3>count = {count}</h3>
      <button onClick={incCount}>+1</button>
    </div>
  );
}
