import "../../styles/leaderBoard.css"

const LeaderBoard = ({ playerScores = [] }) => {
  // Sortering
  const sortedScores = [...playerScores].sort((a, b) => b.score - a.score);

 // antall visnigs plasser på leaderBoardet
  const topScores = sortedScores.slice(0, 10);  
 

  return (
    <div
      className="leaderboardContainer"
    >
      <div className="leaderboardHeader">
        <h2>Leaderboard</h2>
      </div>
      <div className="top3">
        <h3>Top 3</h3>
        
        <div className="ScoreList">
          <ul>
        {topScores.slice(0, 3).map((score, index) => (
          <li key={index} className="leaderboardTop3">
            <p>{index + 1}: {score.userName} {score.score}</p>
          </li>
        ))}

        </ul></div>

      </div>
      <div className="restPlaces">

        <ul>
        {topScores.slice(3).map((score, index) => (
          <li key={index + 3} className="restScore">
           <p>{index + 4}: {score.userName} {score.score}</p>
          </li>
        ))}
        </ul>


      </div>
    </div>
  );
};

export default LeaderBoard;

