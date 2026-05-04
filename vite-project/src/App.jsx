import { useState } from "react";

import "./App.css";
import StartButton from "./components/StartButton";
import Card from "./components/Card";
import Gameboard from "./components/Gameboard";
import GameLogicProvider from "./context/GameLogicProvider";

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
		const shuffled = [...colors].sort(() => Math.random() - 0.5);
		setColors(shuffled);
		console.log("Now shuffled:", shuffled);
	}

	return (
		<>
			<GameLogicProvider>
				<StartButton />
				<Gameboard colors={colors} />
			</GameLogicProvider>
		</>
	);
}

export default App;