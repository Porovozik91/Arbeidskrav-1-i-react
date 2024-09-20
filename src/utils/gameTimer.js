/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
 // Timer. Kaller på endGame() når tiden er på 0
const useTimer = (initialTime, navTo, endGame) => {
  const [timer, setTimer] = useState(initialTime);

  useEffect(() => {
    let counter;
    if (navTo === "game" && timer > 0) {
      counter = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else if (timer <= 0 && navTo === "game") {
      endGame(); // Sender til til endGame når tiden er ferdig
    }
    return () => {
      if (counter) {
        clearInterval(counter);
      }
    };
  }, [timer, navTo]);

  const resetTimer = (newTime) => {
    setTimer(newTime);
  };

  return [timer, resetTimer];
};

export default useTimer;
