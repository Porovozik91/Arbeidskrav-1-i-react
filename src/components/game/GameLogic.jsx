import { useEffect, useState } from "react";
import { getRandomFigure, minusScoreFigures, plusScoreFigures } from "../../utils/Figures";

const Gamelogic = ({ 
    setScore, setCorrectFigures, 
    setWrongFigures, figureTimeReducer,
    setFigureTimeReducer
}) => {
    // informasjon om den nåværende figuren som vises
    const [gameFigure, setGameFigure] = useState(null);
    const [clicked, setClicked] = useState(null);
    
    // håndterer generering og oppdatering av figurer samt intervaller
    useEffect(() => {
        const generateFigure = () => {
            // oppdaterer tilstanden med en ny figur, dens posisjon og tidspunkt når figuren vises
            setGameFigure({
                id: Date.now(),
                figure: getRandomFigure(),
                row: Math.floor(Math.random() * 5),
                col: Math.floor(Math.random() * 5),
                startTime: Date.now(),
            });
            setClicked(null);
        };

        generateFigure();

        // ny figur hvert figureTimeReducer sekund
        const stopInterval = setInterval(() => {
            generateFigure();
        }, figureTimeReducer * 1000);

        return () => clearInterval(stopInterval);
    }, [figureTimeReducer]);
    

    // logikken for beregning av poeng når en figur blir klikket
    const figureClicked = (id, figure) => {
        if (clicked === id) return;
        setClicked(id);

        if (!gameFigure || gameFigure.id !== id) return; 

        const elapsedTime = (Date.now() - gameFigure.startTime) / 1000;
        
        const maxPoints = 100;
        const minPoints = 50;

        const earnedPoints = elapsedTime <= figureTimeReducer
            ? Math.max(minPoints, Math.round((1 - (elapsedTime / figureTimeReducer)) * (maxPoints - minPoints) + minPoints))
            : minPoints; 

        
        if (plusScoreFigures.includes(figure)) {
            setScore(prevScore => prevScore + earnedPoints); 
            setCorrectFigures(prevCount => {
                const countCorrect = prevCount + 1;

                // visnings tiden reduseres med 5% for hver riktig figur
                setFigureTimeReducer(prevTime => Math.max(0.5, prevTime * 0.95)); 
                console.log(`Riktige figurer: ${countCorrect}, Poeng: ${earnedPoints}`);
                return countCorrect;
            });
        } else if (minusScoreFigures.includes(figure)) {
            setScore(prevScore => prevScore - minPoints);
            setWrongFigures(prevCount => {
                const countWrong = prevCount + 1;
                console.log(`Feil figurer: ${countWrong}, Poeng: -${minPoints}`);
                return countWrong;
            });
        }
    };

    return (
        <div className="gameWindow">
            {gameFigure && (
                <div
                    className="figureContainer"
                    key={gameFigure.id}
                    onMouseDown={() => figureClicked(gameFigure.id, gameFigure.figure)}
                    style={{
                        "--col": gameFigure.col + 1,
                        "--row": gameFigure.row + 1,
                        opacity: clicked === gameFigure.id ? 0.2 : 1,
                    }}
                >
                    <img
                        src={gameFigure.figure}
                        alt="game figure"
                        style={{ pointerEvents: 'none' }} 
                    />
                </div>
            )}
        </div>
    );
};

export default Gamelogic;




