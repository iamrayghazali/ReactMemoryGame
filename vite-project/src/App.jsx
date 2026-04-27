import { useState } from "react";

import "./App.css";
import StartButton from "./components/StartButton";
import Card from "./components/Card";
import Gameboard from "./components/Gameboard";

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

  return (
    <>
      <Gameboard colors={colors} />
    </>
  );
}

export default App;
