import { useState } from "react";
import "./App.css";

function App() {
  // let count = 0;
  let [count, setCounter] = useState(0);
  function addValue() {
    if (count < 20) {
      setCounter(count + 1);
      console.log("clicked");
    } else {
      // document.getElementsByTagName('h3').innerHTML = 'Highest Limit is Twenty'
      alert("Highest Limit is Twenty");
    }
  }
  function removeValue() {
    if (count > 0) {
      setCounter(count - 1);
      console.log("clicked");
    } else {
      alert("Lowest Limit is Zero");
    }
  }
  return (
    <>
      <h1>React</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Increase Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrese Value</button>
      <h3></h3>
    </>
  );
}

export default App;
