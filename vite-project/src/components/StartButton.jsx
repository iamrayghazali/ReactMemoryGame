import { useContext, useState } from "react";
import {gameLogicContext} from "../context/GameLogicProvider";

function StartButton() {
	const {randomizeColors, resetBoard} = useContext(gameLogicContext);

	return (
		<div className="button">
			<button onClick={() => resetBoard()}>Start Game</button>
		</div>
	);
}

export default StartButton;