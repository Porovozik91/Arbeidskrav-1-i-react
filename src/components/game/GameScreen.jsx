import "../../styles/gameScreen.css";
import GameLogic from './GameLogic.jsx';

const GameScreen = ({ 
  userName, 
  scored, 
  setScore, 
  timeLeft, 
  setWrongFigures, 
  setCorrectFigures,  
  figureTimeReducer, 
  setFigureTimeReducer,
  feedback, 
  setFeedback
}) => {
  
  const progressBarWidth = (timeLeft / 60) * 100;

  return (
    <section className="gameScreen">
      <header>
        <div className="userGameData">
          <div className="userInfo">
            <p className="userAvatar">😁</p>
            <p className="userName">{userName}</p>
          </div>
        </div>

        <div className="ScoreTimeInfo">
          <div className="gamerTimer">
            <div className="timerBackground">
              <p>{timeLeft}</p>
            </div>
            <div className="TimeTotaLline">
              <div 
                className="TimeleftLine" 
                style={{ width: `${progressBarWidth}%` }}
              ></div>
            </div>
          </div>

          <div className="score">
            <p>{scored}</p>
          </div>
        </div>

        <div className="ingameMenu">
          <button className="quitBtn" onClick={() => location.reload()}>
            Exit
          </button>
        </div>
      </header>

      <main>
        <GameLogic
          setScore={setScore}
          setCorrectFigures={setCorrectFigures}
          setWrongFigures={setWrongFigures}
          figureTimeReducer={figureTimeReducer}
          setFigureTimeReducer={setFigureTimeReducer}
          feedback={feedback}
          setFeedback={setFeedback}
        />
        {feedback && <div className="feedbackMessage">{feedback}</div>}
      </main>
    </section>
  );
};

export default GameScreen;

