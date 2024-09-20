import LeaderBoard from "../common/LeaderBoard";
import "../../styles/endGame.css"

// eslint-disable-next-line react/prop-types
const EndGame = ({ userName, scored, startNewGame, wrongFigures, correctFigures, playerScores }) => {
  return (
    <section className="endBody">
     <div className="endBodyContent">
     <div className="text"> <h2>Your score for this round</h2></div>
     <div className="playerScored">
     <div className="content">
     <p>Player Name: {userName}</p>
      <p>Score: {scored}</p>
      <p>Correct Figures: {correctFigures}</p>
      <p>Wrong Figures: {wrongFigures}</p>
      <div className="newGamebtn">
        <button onClick={startNewGame}>Start New Game</button>
        </div>
     </div>
     </div>
     </div>
     <div>
         <LeaderBoard  playerScores={playerScores} />
      </div>
    </section>
  );
};

export default EndGame;