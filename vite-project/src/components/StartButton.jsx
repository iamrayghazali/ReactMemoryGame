function StartButton({ randomizeColors, callback }) {
  return (
    <div className="startButton">
      <button
        onClick={() => {
          randomizeColors();
          callback(true);
        }}
      >
        Start New Game
      </button>
    </div>
  );
}

export default StartButton;
