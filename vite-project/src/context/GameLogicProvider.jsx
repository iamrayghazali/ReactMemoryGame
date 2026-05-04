import { createContext, useState, useEffect } from "react";
const gameLogicContext = createContext(); 

export default function GameLogicProvider({ children }) {
  	const [cardsFound, setCardsFound] = useState(0);
	const [flippedCard1, setFlippedCard1] = useState(null);
	const [flippedCard2, setFlippedCard2] = useState(null);
	const [flippedCardId1, setFlippedCardId1] = useState(null);
	const [flippedCardId2, setFlippedCardId2] = useState(null);

	const [matchedCards, setMatchedCards] = useState([]);

	function resetBoard() {
		setMatchedCards([]);
		setFlippedCard1(null);
	}

	useEffect(() => {
		console.log("Updated flippedCard1:", flippedCard1);
	}, [flippedCard1]);
	useEffect(() => {
		console.log("Updated flippedCard2:", flippedCard2);
	}, [flippedCard2]);
	useEffect(() => {
		console.log("Updated flippedCardId1:", flippedCardId1);
	}, [flippedCardId1]);
	useEffect(() => {
		console.log("Updated flippedCard2Id2:", flippedCardId2);
	}, [flippedCardId2]);

	function flipCard(color, idnumber) {
		if (!flippedCard1) {
			setFlippedCard1(color);
			setFlippedCardId1(idnumber);
		} else {
			setFlippedCard2(color);
			setFlippedCardId2(idnumber);
		}
	}
	useEffect(() => {
		function checkIfMatch() {
			if (flippedCard1 === flippedCard2) {
				setCardsFound(cardsFound + 2);
				setMatchedCards([...matchedCards, flippedCard1]);
				console.log("Matched cards" + matchedCards);
			}
			setTimeout(() => {
				setFlippedCard1(null);
				setFlippedCard2(null);
			}, 1000);
		}
		if (flippedCard2) {
			checkIfMatch();
		}
	}, [flippedCard2]);

  return (
    <gameLogicContext.Provider value={{ cardsFound, flippedCard1, flippedCard2, flippedCardId1, flippedCardId2, matchedCards,  resetBoard, flipCard}}>
      {children}
    </gameLogicContext.Provider>
  )
}

export { gameLogicContext }; 