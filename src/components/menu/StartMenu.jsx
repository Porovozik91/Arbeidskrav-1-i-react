import Howto from "../common/Howto"
import LeaderBoard from "../common/LeaderBoard"
import { useState } from "react"
import "../../styles/startMenu.css"

const StartMenu = () => {
    const [name, setName] = useState("");

    const userName = (e) => {
        setName(e.target.value);
    }

    const navToGame = () => {
        
    }
    

    return (
        <section className="gameMenu">
            <div className="menu_container">
                <Howto />

                <form>
                    <label>Potato Pulp <br /> 60-Second Showdown</label>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        value={name}
                        onChange={userName} />

                    <button onClick={navToGame}>
                        Start Game
                    </button>
                </form>

                <LeaderBoard />
            </div>
        </section>

    )
}

export default StartMenu
