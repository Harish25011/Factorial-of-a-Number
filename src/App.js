import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  const calculateFactorial = () => {
    let n = parseInt(number);
    if (isNaN(n) || n < 0) {
      setResult("❌ Enter a non-negative integer");
      return;
    }
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
      factorial *= i;
    }
    setResult(`Factorial of ${n} is ${factorial}`);
  };

  const handleReset = () => {
    setNumber("");
    setResult(null);
  };

  return (
    <div className="app">
      <div className="calculator">
        <h1>Factorial Calculator</h1>
        <input
          type="number"
          placeholder="Enter a number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className="buttons">
          <button onClick={calculateFactorial}>Calculate</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        {result && <div className="result">{result}</div>}
      </div>
    </div>
  );
}

export default App;
