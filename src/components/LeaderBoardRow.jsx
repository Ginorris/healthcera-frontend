import React from "react";
import "../styles/LeaderboardRow.css";

const LeaderboardRow = ({
  rank,
  influencer,
  image,
  category,
  trustScore,
  followers,
  verifiedClaims,
}) => (
  <tr className="leaderboard-row">
    <td>{rank}</td>
    <td>
      <div className="leaderboard-row__content">
        <img src={image} alt={influencer} className="leaderboard-row__image" />
        {influencer}
      </div>
    </td>
    <td>{category}</td>
    <td>{trustScore}%</td>
    <td>{followers}</td>
    <td>{verifiedClaims}</td>
  </tr>
);

export default LeaderboardRow;
