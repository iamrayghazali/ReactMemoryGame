import { useContext, useState } from "react";
import StartButton from "./StartButton";
import Card from "./Card";
import { useEffect } from "react";
import { gameLogicContext } from "../context/GameLogicProvider";

function Gameboard({ colors }) {

	const {flipCard, flippedCard1, flippedCard2, flippedCardId1, flippedCardId2, matchedCards} = useContext(gameLogicContext);

	return (
		<div id="game-board">
			{colors.map((color, i) => (
				<Card
					key={i}
					idnumber={i}
					className={`card`}
					i
					color={color}
					onClick={() => flipCard(color, i)}
					isFlipped={(flippedCard1 === color && flippedCardId1 === i) || (flippedCard2 === color && flippedCardId2 === i)}
					isMatched={matchedCards.includes(color)}
				/>
			))}
		</div>
	);
}

export default Gameboard;