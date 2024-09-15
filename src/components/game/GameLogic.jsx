import { useEffect, useState } from "react";
import { getRandomFigure, minusScoreFigures, plusScoreFigures } from "./Figures";

const Gamelogic = ({ setCorrectFigures, setWrongFigures }) => {
    // informasjon om den nåværende figuren som vises
    const [gameFigure, setGameFigure] = useState(null);
    const [clicked, setClicked] = useState(null);

    // håndterer generering og oppdatering av figurer samt intervaller
    useEffect(() => {
        const generateFigure = () => {

            //oppdaterer tilstanden med en ny figur og dens posisjon  
            setGameFigure({
                id: Date.now(),
                figure: getRandomFigure(),
                row: Math.floor(Math.random() * 10),
                col: Math.floor(Math.random() * 10),
            });
            setClicked(null);
        };

        generateFigure();

        // ny figur hver 2 sec
        const stopInterval = setInterval(() => {
            generateFigure();
        }, 2000);

        return () => clearInterval(stopInterval);
    }, []);

    const figureClicked = (id, figure) => {
        if (clicked === id) return;
        setClicked(id);

        //Teller hvor mange riktige og feil figurer er trukket på
        if (plusScoreFigures.includes(figure)) {
            setCorrectFigures(prevCount => {
                const countCorrect = prevCount + 1;
                console.log(`Correct Figures: ${countCorrect}`);
                console.log((id))
                return countCorrect;
            });
        } else if (minusScoreFigures.includes(figure)) {
            setWrongFigures(prevCount => {
                const countWrong = prevCount + 1;
                console.log(`Wrong Figures: ${countWrong}`);
                console.log((id))
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
                    onClick={() => figureClicked(gameFigure.id, gameFigure.figure)}
                    style={{
                        "--col": gameFigure.col + 1,
                        "--row": gameFigure.row + 1,
                        opacity: clicked === gameFigure.id ? 0.2 : 1,
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


