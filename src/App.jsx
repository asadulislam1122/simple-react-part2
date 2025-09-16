import User from "../featch";
import "./App.css";
import Counter from "../counter";
import Runs from "../run";
import { Suspense } from "react";
// fatch
const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

function App() {
  function handleClick() {
    alert("Add Click 1.");
  }
  const handleClick2 = () => {
    alert("Add Click 2");
  };
  const handleClick3 = () => {
    alert("Add Click 3");
  };
  return (
    <>
      <h1>Vite + React</h1>
      <Runs></Runs>
      <br />
      <Counter></Counter>

      <Suspense fallback={<h3 className="card"> Lodding.....</h3>}>
        <User fetchUser={fetchUser}></User>
      </Suspense>

      <div style={{ display: "flex", gap: "20px" }}>
        <button style={{ backgroundColor: "red" }} onClick={handleClick}>
          Add Click
        </button>
        <button style={{ backgroundColor: "yellow" }} onClick={handleClick2}>
          Add Click
        </button>
        <button style={{ backgroundColor: "green" }} onClick={handleClick3}>
          Add Click
        </button>
      </div>
    </>
  );
}

export default App;
