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
      <StartButton randomizeColors={randomizeColors} callback={setIsStarted} isStarted={isStarted}/>

      {isStarted ? (
        <Gameboard colors={colors} randomizeColors={randomizeColors} />
      ) : (
				
			<div id="rules">
				<ul>
					<span id="title">About the game</span>
					<li>Flip two cards each turn</li>
					<li>Non-matching cards flip back over</li>
					<li>Match all pairs to win</li>
				</ul>
			</div>

			)}
    </>
  );
}

export default App;
