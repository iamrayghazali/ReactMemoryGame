import { useState } from "react";

function Card({ color, idnumber, onClick, isFlipped, isMatched }) {
  return (
    <div
      onClick={() => onClick()}
      className={`card ${color} ${idnumber} ${isFlipped || isMatched ? "" : "hidden"} `}
    ></div>
  );
}

export default Card;
