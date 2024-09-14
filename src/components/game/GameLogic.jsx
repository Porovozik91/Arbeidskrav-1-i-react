import { useEffect, useState } from 'react';
import { getRandomFigure } from './Figures';

const Gamelogic = () => {
  const [gameFigure, setGameFigure] = useState(null);

  useEffect(() => {

    const generateFigure = () => {
      setGameFigure(getRandomFigure());
    };

    generateFigure(); 

    //Intervaler hvor ofte figuren vises
    const stopInterval = setInterval(() => {
      generateFigure(); 
    }, 1200); 

    return () => clearInterval(stopInterval); // 
  }, []);

  return (
    <div className="game-window" style={{
        width: "1100px",
        height: "700px",
        backgroundColor: "green",
        overflow: "hidden", 
        padding: "10px"
      }}>
     
        {gameFigure && (
          <img
            style={{
              width: '135px', 
              height: '87px', 
              objectFit: 'cover', 
            }}
            src={gameFigure}
            alt="Game figure"
          />
        )}
      </div>
  );
};

export default Gamelogic;
