import { useState, useEffect } from "react";

export const ScoreStorage = () => {
  const [score, setScore] = useState(0);
  const [scoresStored, setScoresStored] = useState([]);

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem("scoresStored")) || [];
    setScoresStored(storedScores);
  }, []);

  const saveScore = (userName, newScore) => {
    const fluUserName = userName.charAt(0).toUpperCase() + userName.slice(1); //First letter stor:)
    const newPlayerScore = { userName: fluUserName, score: newScore };
    const PlayerScoreUpdated = [...scoresStored, newPlayerScore];
    PlayerScoreUpdated.sort((a, b) => b.score - a.score); 
    setScoresStored(PlayerScoreUpdated);
    localStorage.setItem("scoresStored", JSON.stringify(PlayerScoreUpdated));
  };

  return { score, setScore, scoresStored, saveScore };
};

