import { useState } from "react";

export default function Runs() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleSingle = () => {
    const setSingle = runs + 1;
    setRuns(setSingle);
  };

  const handleFour = () => {
    const setFour = runs + 4;
    setRuns(setFour);
  };
  const handleSix = () => {
    const setSix = runs + 6;
    const upDatedSix = sixes + 1;
    setSixes(upDatedSix);
    setRuns(setSix);
  };

  return (
    <div className="name">
      <h3>Bangladeshi Batsman</h3>
      <button style={{ backgroundColor: "pink" }}>six: {sixes} </button>

      {/* half */}
      {runs >= 50 && <p style={{ color: "green" }}>Half Century! 50+🎉</p>}
      {runs >= 100 && <p style={{ color: "red" }}>Full Century! 100+ 🎉</p>}

      <h1>Score:{runs} </h1>
      <div style={{ marginBottom: "8px" }}>
        <button
          onClick={handleSingle}
          style={{
            backgroundColor: "orange",
            marginBottom: "6px",
            width: "90px",
            color: "white",
          }}
        >
          Single
        </button>
        <button
          onClick={handleFour}
          style={{
            backgroundColor: "aqua",
            marginBottom: "6px",
            width: "90px",
            color: "white",
          }}
        >
          Four
        </button>
        <button
          onClick={handleSix}
          style={{
            backgroundColor: "blue",
            marginBottom: "6px",
            width: "90px",
            color: "white",
          }}
        >
          Six
        </button>
      </div>
    </div>
  );
}
