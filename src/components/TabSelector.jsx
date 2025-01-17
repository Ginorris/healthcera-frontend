import React from "react";
import "../styles/TabSelector.css";

const TabSelector = ({ tabs, activeTab, onTabChange }) => (
  <div className="tab-selector">
    {tabs.map((tab) => (
      <button
        key={tab.value}
        className={`tab-selector__tab ${
          activeTab === tab.value ? "tab-selector__tab--active" : ""
        }`}
        onClick={() => onTabChange(tab.value)}
      >
        {tab.label}
      </button>
    ))}
  </div>
);

export default TabSelector;
