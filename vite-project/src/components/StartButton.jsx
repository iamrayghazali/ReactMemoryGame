function StartButton({ randomizeColors }) {
  return (
    <div className="startButton">
      <button onClick={randomizeColors}>Start Game</button>
    </div>
  );
}

export default StartButton;