import { useState } from "react";

const StartPlay = ({ playGame, userName, setUserName, playerScores }) => {
    const [errorMessage, setErrorMessage] = useState("");

    const submitForm = (e) => {
        e.preventDefault();

        const userNameUc = userName.charAt(0).toUpperCase() + userName.slice(1);
        const nameExists = playerScores.some(score => score.userName === userNameUc);

        if (nameExists) {
            setErrorMessage("This name already exists.");
            setUserName("");
        } else {
            setErrorMessage("");
            playGame();
        }
    };

    const placeholderText = errorMessage || "Enter Your Name";

    return (
        <form onSubmit={submitForm}>
            <input
                type="text"
                placeholder={placeholderText}
                value={userName}
                maxLength="9"
                onChange={(e) => setUserName(e.target.value)}
                required
            />
            {errorMessage && <p className="error">{errorMessage}</p>}
            <button type="submit">Start</button>
        </form>
    );
};

export default StartPlay;
