import { useState } from 'react';
import StartButton from './StartButton';
import Card from './Card';
import { useEffect } from 'react';

function Gameboard({colors}) {
  const [cardsFound, setCardsFound] = useState(0);
  const [flippedCard1, setFlippedCard1] = useState(null);
  const [flippedCard2, setFlippedCard2] = useState(null);
  const [flippedCardId1, setFlippedCardId1] = useState(null);
  const [flippedCardId2, setFlippedCardId2] = useState(null);

    const [matchedCards, setMatchedCards] = useState([]);


function randomizeColors() {
  const shuffled = [...colors].sort(() => Math.random() - 0.5);
  setColors(shuffled); 
}

  function flipCard (color, idnumber) {
    if (!flippedCard1) {
      setFlippedCard1(color);
      setFlippedCardId1(idnumber);
      console.log(flippedCard1)
      console.log(flippedCardId1)
    } else if (!flippedCard2) {
      setFlippedCard2(color);
      setFlippedCardId2(idnumber);

      checkIfMatch();
    } 
  }

  function checkIfMatch () {
    if (flippedCard1 === flippedCard2) {
      setCardsFound(cardsFound + 2);
      setMatchedCards([...matchedCards, flippedCard1]); 
    }
    setFlippedCard1(null);
    setFlippedCard2(null);
  }

return (
  <div id="game-board">
    <StartButton onClick={randomizeColors} />

      {colors.map((color, i) => (
        <Card key={i} idnumber={i} className={`card`} i color={color} onClick={() => flipCard(color, i)} isFlipped={(flippedCard1 === color && flippedCardId1 === i) || flippedCard2 === color} isMatched={matchedCards.includes(color)}/>
      ))}
      
  </div>
)
}



export default Gameboard;