import "../../styles/gameScreen.css"
import Gamelogic from "./Gamelogic";


const GameScreen = ({ 
  userName, scored, setScore, timeLeft, 
  setWrongFigures, setCorrectFigures,  
  figureTimeReducer, setFigureTimeReducer
}) => {
  

  return (
    <section className="gameScreen">
    <header>
      <div className="userGameData">
        <div>
        <p>Player</p>
        <p className="userName">{userName}</p>
        </div>
        <div className="score">
          <p>Your Score</p>
          <p>{scored}</p>
        </div>
      </div>
      <div className="gamerTimer">{timeLeft}</div>
      <div className="ingameMenu">
      <button onClick={() => location.reload()}>Quit</button>
      </div>
    </header>
    <main>
      <Gamelogic  
        setScore={setScore}
        setWrongFigures={setWrongFigures}
        setCorrectFigures={setCorrectFigures} 
        figureTimeReducer={figureTimeReducer}
        setFigureTimeReducer={setFigureTimeReducer}
        />
    </main>
  </section>
  );
};

export default GameScreen;