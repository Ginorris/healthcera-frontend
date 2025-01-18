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
}) => {
  const slugify = (name) =>
    name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  const slug = slugify(influencer);

  return (
    <tr className="leaderboard-row">
      <td>{rank}</td>
      <td>
        <a
          href={`/influencer/${slug}`}
          style={{ textDecoration: "none", color: "#e2e8f0" }}
        >
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
};

export default LeaderboardRow;
