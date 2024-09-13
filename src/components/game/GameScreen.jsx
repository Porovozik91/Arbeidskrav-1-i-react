import { useEffect, useState } from "react";

const GameScreen = ({ userName, endGame }) => {
  const [timer, setTimer] = useState(5);

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
      <header style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="userGameData" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <p className="userName">{userName}</p>
          <div>
            <ul>
              <li>score</li>
              <li>bestScore</li>
            </ul>
          </div>
        </div>
        <div className="gamerTimer">{timer}</div>
        <div className="modalIngameMenu">
          <p>Reset</p> 
          <p>Quit</p> 
        </div>
      </header>
      <main style={{ display: "flex", justifyContent: "center" }}>
        <div className="gameWindow" style={{ backgroundColor: "green", width: "1100px", height: "700px" }}></div>
      </main>
    </section>
  );
};

export default GameScreen;

