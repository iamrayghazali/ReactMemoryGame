function StartButton({ randomizeColors, callback }) {
  return (
    <div className="startButton">
      <button onClick={() => {
		randomizeColors;
		callback(true);
	  }}>Start Game</button>
    </div>
  );
}

export default StartButton;