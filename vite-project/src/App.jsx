import { useState } from "react";

import "./App.css";
import StartButton from "./components/StartButton";
import Card from "./components/Card";
import Gameboard from "./components/Gameboard";

function App() {
  const [isStarted, setIsStarted] = useState(false);
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
    const shuffled = [...colors].sort(() => Math.random() - 0.5);
    setColors(shuffled);
  }

  return (
    <>
      <StartButton randomizeColors={randomizeColors} callback={setIsStarted} />

      {isStarted ? (
        <Gameboard colors={colors} randomizeColors={randomizeColors} />
      ) : null}
    </>
  );
}

export default App;
