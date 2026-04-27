import { useState } from "react";

function Card({ color, onClick, isFlipped, isMatched }) {
  return (
    <div onClick={() => onClick()} className={`card ${color} ${isFlipped1 || isMatched ? '' : 'hidden'}`} >

    </div>
  );
}

export default Card;
