import { useEffect, useState } from "react";
import { getRandomFigure } from "./Figures";

const Gamelogic = () => {
  // informasjon om den nåværende figuren som vises
  const [gameFigure, setGameFigure] = useState(null);

  // håndterer generering og oppdatering av figurer samt intervaller
  useEffect(() => {
   
    const generateFigure = () => {
         //oppdaterer tilstanden med en ny figur og dens posisjon
      setGameFigure({
        id: new Date().getTime(), 
        figure: getRandomFigure(), 
        row: Math.floor(Math.random() * 10), 
        col: Math.floor(Math.random() * 10), 
      });
    };

    generateFigure(); 

  
    const stopInterval = setInterval(() => {
      generateFigure();
    }, 2000);

    
    return () => clearInterval(stopInterval);
  }, []); 

  return (
    <div className="gameWindow">
      {gameFigure && (
        <div
          className="figureContainer"
          key={gameFigure.id}
          style={{
            "--col": gameFigure.col + 1,
            "--row": gameFigure.row + 1,
          }}
        >
          <img
            src={gameFigure.figure}
            alt="game figure"
          />
        </div>
      )}
    </div>
  );
};

export default Gamelogic;


