function StartButton({ randomizeColors, callback, isStarted }) {
  return (
    <div className="startButton">
      <button
        onClick={() => {
          randomizeColors();
          callback(true);
        }}
      >
        {isStarted ? ("Reset"):("Start Game")}
      </button>
    </div>
  );
}

export default StartButton;
