import "../../styles/howTo.css";
import ExampleImagePositive from "../../assets/potet-figurer-master/Frontend_bakgrunn.png"
import ExampleImageNegative from "../../assets/skal ikke klikkes/d7d2b85d0d9bada9e1b0a938316358fd.png"

const Howto = () => {
  return (
    <div className="HowTo">
      <h2>How to Play</h2>
      <div className="HowToPlay">
        <p>Click on the <span>potatoes with eyes</span> to earn points. <img className="positiveFigure" src={ExampleImagePositive} alt="positiv spillefigur" /></p>
        <hr />
        <p>Avoid those <span>without eyes to prevent</span> losing points. <img className="negativeFigure" src={ExampleImageNegative} alt="negativ spillefigur" /></p>
      </div>
      <div className="rules">
       <hr />
        <h3><span>Game Rules:</span></h3>
        <ul>
          <li>The game lasts 60 seconds.</li>
          <li>Each correct click reduces the potato's visibility time by 5%.</li>
          <li>Clicking on the background resets the potato's visibility time by 5%.</li>
         <hr />
          <li><strong><span>Potatoes with Eyes:</span></strong> Earn points starting at 100, with an initial visibility of 2 seconds. Points decrease with time. Click quickly for more points.</li>
         <hr />
          <li><strong><span>Potatoes without Eyes:</span></strong> Lose 50 points if clicked.</li>
         
        </ul>
      </div>
      <p style={{fontSize: "2rem"}}>Good luck!</p>
    </div>
  );
};

export default Howto;

