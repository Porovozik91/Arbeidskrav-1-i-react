import "../../styles/gameScreen.css"
import Gamelogic from "./Gamelogic";


const GameScreen = ({ userName, timeLeft, setWrongFigures, setCorrectFigures }) => {
  

  return (
    <section className="gameScreen">
    <header>
      <div className="userGameData">
        <p className="userName">{userName}</p>
        <div className="score">
          <ul>
            <li>score</li>
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
        setWrongFigures={setWrongFigures}
        setCorrectFigures={setCorrectFigures} />
    </main>
  </section>
  );
};

export default GameScreen;