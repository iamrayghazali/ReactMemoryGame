import { useState } from "react";

import "./App.css";
import StartButton from "./components/StartButton";
import Card from "./components/Card";

function App() {
  const [colors, setColors] = useState([
    "blue",
    "green",
    "red",
    "yellow",
    "blue",
    "green",
    "red",
    "yellow",
    "purple",
    "cyan",
    "purple",
    "cyan",
  ]);

  function randomizeColors() {
    colors.sort(() => Math.random() - 0.5);
  }

  return (
    <>
      <StartButton onClick={randomizeColors} />
      {colors.map((color) => (
        <Card />
      ))}
    </>
  );
}

export default App;
