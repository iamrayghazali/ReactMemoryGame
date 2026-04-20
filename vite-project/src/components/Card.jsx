import { useState } from "react";

function Card({ color }) {
  const [show, setShow] = useState(false);
  return <div onClick={() => setShow(!show)} className={`card ${color}`}></div>;
}

export default Card;
