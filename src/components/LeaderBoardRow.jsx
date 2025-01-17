import React from 'react';
import '../styles/LeaderboardRow.css';

const LeaderboardRow = ({
  rank,
  influencer,
  category,
  trustScore,
  trend,
  followers,
  verifiedClaims,
  image,
}) => (
  <tr className="leaderboard-row">
    <td>{rank}</td>
    <td>
      <div className="leaderboard-row__content">
        <img
          src={image}
          alt={influencer}
          className="leaderboard-row__image"
        />
        {influencer}
      </div>
    </td>
    <td>{category}</td>
    <td>{trustScore}%</td>
    <td>{trend === 'up' ? '🔼' : '🔽'}</td>
    <td>{followers}</td>
    <td>{verifiedClaims}</td>
  </tr>
);

export default LeaderboardRow;
