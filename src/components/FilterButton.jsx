import React from "react";
import "../styles/FilterButton.css";

const FilterButton = ({ label, active, onClick }) => (
  <button
    className={`filter-button ${active ? "filter-button--active" : ""}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default FilterButton;
