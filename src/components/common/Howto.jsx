const Howto = () => {
  return (
<div className="HowTo" style={{width: "300px", height: "500px", backgroundColor: "darkgoldenrod", borderRadius: "1rem", transform: "rotateY(40deg) rotateX(10deg)"}}>
  <h2 style={{textAlign: "center"}}>How to Play</h2>
  <div className="HowToPlay">
    <p>Try to score as many points as possible by clicking on the potatoes with eyes that appear on the screen. 
      Avoid clicking on potatoes without eyes to prevent losing points.</p>
  </div>
  <div className="rules">
    <h3>Game Rules:</h3>
    <ul>
      <li>The game lasts for 60 seconds.</li>
      <li>With each correct click, the potatoes visibility time decreases by 5%.</li>
        <li>Potatoes with Eyes: Click these to earn points. You start with 100 points and 2 seconds visible time, but the score decreases based on how long the potato has been visible. The quicker you click, the more points you earn.</li>
        <li>Potatoes without Eyes: Clicking these will subtract 50 points from your total score.</li>
    </ul>
  </div>
  <p style={{textAlign: "center"}}>Good luck!</p>
</div>

  )
}

export default Howto