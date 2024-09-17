import LeaderBoard from "../common/LeaderBoard";

const EndGame = ({ userName, scored, startNewGame, wrongFigures, correctFigures, playerScores }) => {
  return (
    <div>
     
     <div>
     <h2>Your score for this round</h2>
     <p>Player Name: {userName}`</p>
      <p>Score: {scored}</p>
      <p>Correct Figures: {correctFigures}</p>
      <p>Wrong Figures: {wrongFigures}</p>
      <button onClick={startNewGame}>Start New Game</button>
     </div>

      <div>
         <LeaderBoard  playerScores={playerScores} />
      </div>
    </div>
  );
};

export default EndGame;