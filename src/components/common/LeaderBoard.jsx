import "../../styles/leaderBoard.css"

const LeaderBoard = ({ playerScores = [] }) => {
  // Sortering
  const sortedScores = [...playerScores].sort((a, b) => b.score - a.score);

 // Hvor mange brukere som skal vises på leaderBoard
  const topScores = sortedScores.slice(0, 15);  
 

  return (
    <div className="leaderboardContainer">
  <div className="leaderboardHeader">
    <h2>Leaderboard</h2>
  </div>

  <div className="scoreClimb">
    
  <div className="1Place">
   {topScores[1] && (
        <div className="leaderboardTop3">
          <p className="top2">😏<br />
          {topScores[1].userName} <br />
          🎖️{topScores[1].score}</p>
        </div>
      )}
   <div className="climb2">
      <p><span>🥈</span></p>
    </div>
   </div>

   <div className="2place">
      {topScores[0] && (
        <div className="leaderboardTop3">
          <p className="top1">😎<br />
          {topScores[0].userName} <br />
          🎖️{topScores[0].score}</p>
        </div>
      )}
   <div className="climb1">
    <p><span>🥇</span></p>
   </div>
   </div>

   <div className="3place">
      {topScores[2] && (
        <div className="leaderboardTop3">
          <p className="top3">😊<br />
          {topScores[2].userName} <br />
          🎖️{topScores[2].score}</p>
        </div>
      )}
   <div className="climb3">
    <p><span>🥉</span></p>
   </div>
   </div>

  </div>


  <div className="restPlaces">
    <ul>
    {topScores.slice(3).map((score, index) => (
      <li key={index + 3} className="restScore">
       
       <p>{index + 4}: 😁 {score.userName} <br /> 🏅{score.score}</p>
      
      
      </li>
    ))}
    </ul>
  </div>
</div>

    
   
  );
};

export default LeaderBoard;

