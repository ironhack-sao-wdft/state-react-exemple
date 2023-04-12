import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function sum() {
    setCounter(counter + 1);
    console.log(counter);
  }

  function sub() {
    setCounter(counter - 1);
    console.log(counter);
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={sum}>+</button>
      <button onClick={sub}>-</button>
    </>
  );
}

export default App;
