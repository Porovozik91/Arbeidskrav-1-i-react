import { useState } from "react";
import "./App.css";
import StartMenu from "./components/menu/StartMenu";
import GameScreen from "./components/game/GameScreen";
import EndGame from "./components/result/EndGame";

const App = () => {
  const [userName, setUserName] = useState("");
  const [navTo, setNavTo] = useState("start"); 

  const startMenu = () => {
    setNavTo("start");
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
        />
      ) : (
        <EndGame
          userName={userName}
          startNewGame={startMenu}
        />
      )}
    </>
  );
};

export default App;

