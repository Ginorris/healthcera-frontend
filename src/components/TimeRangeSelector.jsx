import React from "react";
import "../styles/TimeRangeSelector.css";

const TimeRangeSelector = ({ activeRange, onRangeChange }) => {
  const ranges = ["Last Week", "Last Month", "Last Year", "All Time"];

  return (
    <div className="time-range-selector">
      {ranges.map((range, index) => (
        <button
          key={index}
          className={`time-range-selector__button ${
            activeRange === range.toLowerCase().replace(" ", "") ? "active" : ""
          }`}
          onClick={() => onRangeChange(range.toLowerCase().replace(" ", ""))}
        >
          {range}
        </button>
      ))}
    </div>
  );
};

export default TimeRangeSelector;
