import React from "react";
import "../styles/LeaderboardTable.css";
// import LeaderboardRow from 'LeaderboardRow';
// import LeaderboardRow from './LeaderboardRow';
import LeaderboardRow from "./LeaderBoardRow";

const LeaderboardTable = ({ data }) => (
  <table className="leaderboard-table">
    <thead>
      <tr>
        <th>Rank</th>
        <th>Influencer</th>
        <th>Category</th>
        <th>Trust Score</th>
        <th>Followers</th>
        <th>Verified Claims</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <LeaderboardRow key={index} {...row} />
      ))}
    </tbody>
  </table>
);

export default LeaderboardTable;
