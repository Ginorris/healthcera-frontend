import React from "react";
import "../styles/StatCard.css";

const StatCard = ({ value, label }) => (
  <div className="stats-card">
    <div className="stats-card__value">{value}</div>
    <div className="stats-card__label">{label}</div>
  </div>
);

export default StatCard;
