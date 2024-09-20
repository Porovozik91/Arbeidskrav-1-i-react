import { useState } from "react";
import "./App.css";
import StartMenu from "./components/menu/StartMenu";
import GameScreen from "./components/game/GameScreen";
import EndGame from "./components/result/EndGame";
import { ScoreStorage } from "./utils/scoreStorage";
import useTimer from "./utils/gameTimer";

const App = () => {
  const [userName, setUserName] = useState("");
  const { score, setScore, scoresStored, saveScore } = ScoreStorage();
  const [navTo, setNavTo] = useState("start");
  const [wrongFigures, setWrongFigures] = useState(0);
  const [correctFigures, setCorrectFigures] = useState(0);
  const [figureTimeReducer, setFigureTimeReducer] = useState(2);
  const [feedback, setFeedback] = useState("");

 

  const endGame = () => {
    setNavTo("end");
    saveScore(userName, score);
  };
  const [timer, setTimer] = useTimer(0, navTo, endGame);
  

  const startMenu = () => {
    setNavTo("start");
    setScore(0);
    setWrongFigures(0);
    setCorrectFigures(0);
  };

  const startGame = () => {
    setNavTo("game");
    setTimer(10);                        
    setFigureTimeReducer(2);
    setFeedback("");
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
          feedback={feedback}
          setFeedback={setFeedback}
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

