import { useEffect, useState } from "react";
import "../../styles/gameScreen.css"
import Gamelogic from "./Gamelogic";

const GameScreen = ({ userName, endGame }) => {
  const [timer, setTimer] = useState(60);

  // Timer. Kaller på endGame() når tiden er på 0
  useEffect(() => {
    if (timer > 0) {
      const counter = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
      return () => clearInterval(counter);
    } else {
      endGame(); 
    }
  }, [timer, endGame]);

  return (
    <section className="gameScreen">
    <header>
      <div className="userGameData">
        <p className="userName">{userName}</p>
        <div>
          <ul>
            <li>score</li>
            <li>bestScore</li>
          </ul>
        </div>
      </div>
      <div className="gamerTimer">{timer}</div>
      <div className="ingameMenu">
        <button>Reset</button>
        <button>Quit</button>
      </div>
    </header>
    <main>
      <Gamelogic/>
    </main>
  </section>
  );
};

export default GameScreen;

