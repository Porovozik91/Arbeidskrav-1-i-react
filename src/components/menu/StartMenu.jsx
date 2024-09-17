import Howto from "../common/Howto";
import LeaderBoard from "../common/LeaderBoard";
import "../../styles/startMenu.css";

const StartMenu = ({ playGame, userName, setUserName, playerScores }) => {
    const submitForm = (e) => {
        e.preventDefault(); 
        playGame(); 
    };

    return (
        <section className="gameMenu">
            <div className="menuContainer">
                <Howto />
                <form onSubmit={submitForm}>
                    <label>
                        Potato Pulp <br /> 60-Second Showdown
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                    <button type="submit">Start Game</button>
                </form>
                <LeaderBoard  playerScores={playerScores} />
            </div>
        </section>
    );
};

export default StartMenu;
