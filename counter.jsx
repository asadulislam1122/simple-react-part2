import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  // flllow
  const handleAdd = () => {
    // console.log("asas");
    const addcount = count + 1;
    setCount(addcount);
  };
  //   unflow
  const handleReduce = () => {
    setCount((prevCount) => prevCount - 1);
  };
  //   css
  const countStyle = {
    border: "2px solid blue",
    borderRadius: "30px",
    marginBottom: "20px",
  };
  return (
    <div style={countStyle}>
      <h2>Flowers: {count}</h2>
      <button
        onClick={handleAdd}
        style={{
          backgroundColor: "blue",
          marginBottom: "6px",
          width: "90px",
          color: "white",
        }}
      >
        Follow
      </button>
      <br />
      <button
        onClick={handleReduce}
        style={{
          backgroundColor: "red",
          marginBottom: "6px",
          width: "90px",
          color: "white",
        }}
      >
        Unfollow
      </button>
    </div>
  );
}
