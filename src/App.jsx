import { useState } from "react";
import "./App.css";
import StartMenu from "./components/menu/StartMenu";
import GameScreen from "./components/game/GameScreen";
import EndGame from "./components/result/EndGame";

const App = () => {
  const [userName, setUserName] = useState("");
  const [navTo, setNavTo] = useState("start");
  const [wrongFigures, setWrongFigures] = useState(0);
  const [correctFigures, setCorrectFigures] = useState(0);

  const startMenu = () => {
    setNavTo("start");
    setWrongFigures(0); 
    setCorrectFigures(0); 
  };

  const startGame = () => {
    setNavTo("game");
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


