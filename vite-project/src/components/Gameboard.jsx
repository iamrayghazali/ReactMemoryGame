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

function randomizeColors() {
  const shuffled = [...colors].sort(() => Math.random() - 0.5);
  setColors(shuffled); 
}

  function flipCard (color, idnumber) {
    if (!flippedCard1) {
      setFlippedCard1(color);
      setFlippedCardId1(idnumber);


    } else {
      setFlippedCard2(color);
      setFlippedCardId2(idnumber);


      
    } 
  }
  useEffect(() => {
  function checkIfMatch () {
    if (flippedCard1 === flippedCard2) {
      setCardsFound(cardsFound + 2);
      setMatchedCards([...matchedCards, flippedCard1]);
      console.log("Matched cards" + matchedCards) ;
    }
    setFlippedCard1(null);
    setFlippedCard2(null);
  }
  if (flippedCard2) {
    checkIfMatch();

} }, [flippedCard2] )

return (
  <div id="game-board">
    <StartButton onClick={randomizeColors} />

      {colors.map((color, i) => (
        <Card key={i} idnumber={i} className={`card`} i color={color} onClick={() => flipCard(color, i)} isFlipped={(flippedCard1 === color && flippedCardId1 === i) || flippedCard2 === color && flippedCardId2 === i} isMatched={matchedCards.includes(color)}/>
      ))}
      
  </div>
)
}



export default Gameboard;