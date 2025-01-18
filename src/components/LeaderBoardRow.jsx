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
      {/* TODO no style, slug name, redirect */}
      <a href="/influecer">
        <div className="leaderboard-row__content">
          <img
            src={image}
            alt={influencer}
            className="leaderboard-row__image"
          />
          {influencer}
        </div>
      </a>
    </td>
    <td>{category.charAt(0).toUpperCase() + category.slice(1)}</td>
    <td>{trustScore}%</td>
    <td>{followers}</td>
    <td>{verifiedClaims}</td>
  </tr>
);

export default LeaderboardRow;
