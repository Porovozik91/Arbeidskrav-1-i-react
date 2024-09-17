import { useState, useEffect } from "react";
import "./App.css";
import StartMenu from "./components/menu/StartMenu";
import GameScreen from "./components/game/GameScreen";
import EndGame from "./components/result/EndGame";
import { ScoreStorage } from "./utils/scoreStorage";

const App = () => {
  const [userName, setUserName] = useState("");
  const { score, setScore, scoresStored, saveScore } = ScoreStorage();
  const [navTo, setNavTo] = useState("start");
  const [timer, setTimer] = useState(0);

  const [wrongFigures, setWrongFigures] = useState(0);
  const [correctFigures, setCorrectFigures] = useState(0);
  const [figureTimeReducer, setFigureTimeReducer] = useState(2);

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
    return () => {
      if (counter) {
        clearInterval(counter); 
      }
    };
  }, [timer, navTo]);

 

  const startMenu = () => {
    setNavTo("start");
    setScore(0);
    setWrongFigures(0);
    setCorrectFigures(0);
  };

  const startGame = () => {
    setNavTo("game");
    setTimer(3);
    setFigureTimeReducer(2);
  };

  const endGame = () => {
    setNavTo("end");
    saveScore(userName, score);
  };

  return (
    <>
      {navTo === "start" ? (
        <StartMenu
          userName={userName}
          setUserName={setUserName}
          playGame={startGame}
          playerScores={scoresStored}
        />
      ) : navTo === "game" ? (
        <GameScreen
          userName={userName}
          scored={score}
          setScore={setScore}
          endGame={endGame}         
          setWrongFigures={setWrongFigures}
          setCorrectFigures={setCorrectFigures}
          timeLeft={timer}
          figureTimeReducer={figureTimeReducer}
          setFigureTimeReducer={setFigureTimeReducer}
        />
      ) : (
        <EndGame
          userName={userName}
          scored={score}
          playerScores={scoresStored}
          startNewGame={startMenu}
          wrongFigures={wrongFigures}
          correctFigures={correctFigures}
        />
      )}
    </>
  );
};

export default App;
