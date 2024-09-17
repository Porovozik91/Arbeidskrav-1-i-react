import { useState, useEffect } from "react";

export const ScoreStorage= () => {
  const [score, setScore] = useState(0);
  const [scoresStored, setScoresStored] = useState([]);

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem("scoresStored")) || [];
    setScoresStored(storedScores);
  }, []);

  const saveScore = (userName, newScore) => {
    const newPlayerScore = { userName, score: newScore };
    const PlayerScoreUpdated = [...scoresStored, newPlayerScore];
    PlayerScoreUpdated.sort((a, b) => b.score - a.score); // Sort scores in descending order
    setScoresStored(PlayerScoreUpdated);
    localStorage.setItem("scoresStored", JSON.stringify(PlayerScoreUpdated));
  };

  return { score, setScore, scoresStored, saveScore };
};
