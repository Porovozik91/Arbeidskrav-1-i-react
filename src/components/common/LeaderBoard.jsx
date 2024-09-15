const LeaderBoard = () => {
  return (
    <div className="LeaderBoard" style={{width: "270px", height: "370px", backgroundColor: "green", borderRadius: "1rem", transform: "rotateY(-40deg) rotateX(10deg)"}}>
    <h2 style={{textAlign: "center"}}>Leaderboard</h2>
    <div className="topFive"><p>1st: score</p></div>
    <div className="YouPlace"><p>your plase score:</p></div>
    </div>
  )
}

export default LeaderBoard
