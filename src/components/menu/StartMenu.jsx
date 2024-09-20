import React, { useState } from "react";
import Howto from "../common/Howto";
import LeaderBoard from "../common/LeaderBoard";
import StartPlay from "../common/PlayGame";
import "../../styles/startMenu.css";
import "../../styles/startMenuModal.css";
import "../../styles/menuButtons.css"

const StartMenu = ({ playGame, userName, setUserName, playerScores }) => {
    const [currentView, setCurrentView] = useState("leaderboard"); 

    const prevClick = () => {
        setCurrentView(prevView => (prevView === "howto" ? "leaderboard" : "howto"));
    };

    const nextClick = () => {
        setCurrentView(prevView => (prevView === "leaderboard" ? "howto" : "leaderboard"));
    };

    const viewComponent = () => {
        switch (currentView) {
            case "howto":
                return <Howto />;
            case "leaderboard":
                return <LeaderBoard playerScores={playerScores} />;
            default:
                return null;
        }
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const PlayClick = () => {
        setIsModalOpen(true);
    };

    const CloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="gameMenu">
            <div className="heroText"> <h1>
                Potato Pulp <br /> 60-Second Showdown
            </h1></div>

            <div className="carousel">
                <div className="carouselContent">
                    <div className="carouseltem">
                        {viewComponent()}
                    </div>
                </div>
                <div className="navigationButtons">
    <button className="nav-button navLeft" onClick={prevClick}></button>
    <button className="nav-button navWright" onClick={nextClick}></button>
</div>

            </div>
            <div className="menuButton">
                <button onClick={PlayClick}>Play</button>
            </div>
            {isModalOpen && (
                <div className="modalOverlay">
                    <div className="modalContent">
                    <button className="modalClose" onClick={CloseModal}>Close</button>
                        <StartPlay
                            playGame={playGame}
                            userName={userName}
                            setUserName={setUserName}
                            playerScores={playerScores}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default StartMenu;

