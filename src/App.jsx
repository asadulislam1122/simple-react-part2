import "./App.css";
import Counter from "../counter";
import Runs from "../run";

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
