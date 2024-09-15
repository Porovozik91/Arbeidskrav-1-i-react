
const EndGame = ({ userName, startNewGame, wrongFigures, correctFigures }) => {
  return (
    <div>
      <h2>{userName}`s result</h2>
      <p>Score:</p>
      <p>Correct Figures: {correctFigures}</p>
      <p>Wrong Figures: {wrongFigures}</p>
      <button onClick={startNewGame}>Start New Game</button>
    </div>
  );
};

export default EndGame;

