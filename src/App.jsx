import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [lovePercent, setLovePercent] = useState(null);

  const calculateLove = () => {
    if (name1.trim() === "" || name2.trim() === "") {
      alert("Please enter both names!");
      return;
    }
    const percent = Math.floor(Math.random() * 51) + 50; // 50% - 100%
    setLovePercent(percent);
  };

  const reset = () => {
    setName1("");
    setName2("");
    setLovePercent(null);
  };

  return (
    <div className="container">
      <h1>💖 Love Calculator 💖</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your crush's name"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />
      <button onClick={calculateLove}>Calculate Love ❤️</button>

      {lovePercent !== null && (
        <div className="result">
          <h2>{lovePercent}% 💘</h2>
          <p>
            {name1} ❤️ {name2}
          </p>
          <button className="try-again" onClick={reset}>
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
