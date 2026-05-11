import { useState } from "react";
import StartButton from "./StartButton";
import Card from "./Card";
import { useEffect } from "react";

function Gameboard({ colors, randomizeColors }) {
  const [flippedCard1, setFlippedCard1] = useState(null);
  const [flippedCard2, setFlippedCard2] = useState(null);
  const [flippedCardId1, setFlippedCardId1] = useState(null);
  const [flippedCardId2, setFlippedCardId2] = useState(null);
  const [isLocked, setIsLocked] = useState(false);

  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(
    () =>
      function resetBoard() {
        setFlippedCard1(null);
        setFlippedCard2(null);
        setFlippedCardId1(null);
        setFlippedCardId2(null);
		setMatchedCards([]);
      },
    [colors],
  );

  useEffect(() => {
    if (matchedCards.length === colors.length / 2) {
      alert("Congratulations! You are amazing!");
    }
  }, [matchedCards]);

  function flipCard(color, idnumber) {
	if (isLocked) return;
  if (idnumber === flippedCardId1) return;
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
        setMatchedCards([...matchedCards, flippedCard1]);
      }
	  setIsLocked(true);
      setTimeout(() => {
        setFlippedCard1(null);
        setFlippedCard2(null);
		setFlippedCardId1(null);
		setFlippedCardId2(null);
		setIsLocked(false);
      }, 400);
    }
    if (flippedCard2) {
      checkIfMatch();
    }
  }, [flippedCard2]);

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
          isFlipped={
            (flippedCard1 === color && flippedCardId1 === i) ||
            (flippedCard2 === color && flippedCardId2 === i)
          }
          isMatched={matchedCards.includes(color)}
        />
      ))}
    </div>
  );
}

export default Gameboard;
