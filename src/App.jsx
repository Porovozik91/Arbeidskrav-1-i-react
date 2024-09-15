import { useState, useEffect } from "react";
import "./App.css";
import StartMenu from "./components/menu/StartMenu";
import GameScreen from "./components/game/GameScreen";
import EndGame from "./components/result/EndGame";

const App = () => {
  const [userName, setUserName] = useState("");
  const [navTo, setNavTo] = useState("start");
  const [wrongFigures, setWrongFigures] = useState(0);
  const [correctFigures, setCorrectFigures] = useState(0);
  const [timer, setTimer] = useState(0);
  

  // Timer. Kaller på endGame() når tiden er på 0
  useEffect(() => {
    let counter;
    if (navTo === "game" && timer > 0) {
      counter = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else if (timer <= 0 && navTo === "game") {
      endGame(); 
    }
    return () => clearInterval(counter);
  }, [timer, navTo]);

  const startMenu = () => {
    setNavTo("start");
    setWrongFigures(0); 
    setCorrectFigures(0); 
  };

  const startGame = () => {
    setNavTo("game");
    setTimer(60);
  };

  const endGame = () => {
    setNavTo("end");
  };

  return (
    <>
      {navTo === "start" ? (
        <StartMenu
          userName={userName}
          setUserName={setUserName}
          playGame={startGame}
        />
      ) : navTo === "game" ? (
        <GameScreen
          userName={userName}
          endGame={endGame}
          setWrongFigures={setWrongFigures}
          setCorrectFigures={setCorrectFigures}
          timeLeft={timer}
        />
      ) : (
        <EndGame
          userName={userName}
          startNewGame={startMenu}
          wrongFigures={wrongFigures}
          correctFigures={correctFigures}
        />
      )}
    </>
  );
};

export default App;
