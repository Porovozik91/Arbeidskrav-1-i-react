import "../../styles/gameScreen.css"
import Gamelogic from "./Gamelogic";


const GameScreen = ({ 
  userName, scored, setScore, timeLeft, 
  setWrongFigures, setCorrectFigures, 
  figureTimeReducer,
  setFigureTimeReducer, 
}) => {
  

  return (
    <section className="gameScreen">
    <header>
      <div className="userGameData">
        <p className="userName">{userName}</p>
        <div className="score">
          <ul>
            <li>{scored}</li>
            <li>bestScore</li>
          </ul>
        </div>
      </div>
      <div className="gamerTimer">{timeLeft}</div>
      <div className="ingameMenu">
        <button>Reset</button>
        <button>Quit</button>
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