import { useState } from "react";
import "./App.css"
import StartMenu from "./components/menu/StartMenu";
import GameScreen from "./components/GameScreen";

const App = () => {
  const [userName, setUserName] = useState("");
  const [navTo, setNavTo] = useState(false);

  const startGame = () => {
    setUserName(userName);
    setNavTo(true);

  }
  return (
    <>
      {navTo ? <GameScreen /> : <StartMenu playGame={startGame} userName={userName} setUserName={setUserName} />}
    </>
  )
}

export default App;