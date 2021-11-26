import React from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [advicing, setAdvicing] = useState("");

  const fetchAdvice = () => {
    console.log("Fetched Data");
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const {advice} = response.data.slip;
        console.log(advice);
        setAdvicing(advice)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div className="card">
        <h1>advice</h1>
        <p>"{advicing}"</p>
        <button onClick={fetchAdvice}>Get advice</button>
      </div>
    </div>
  );
}

export default App;

