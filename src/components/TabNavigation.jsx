import React from "react";
import "../styles/TabNavigation.css";

const TabNavigation = ({ tabs, activeTab, onTabClick }) => (
  <div className="tab-navigation">
    {tabs.map((tab, index) => (
      <button
        key={index}
        className={`tab-navigation__button ${activeTab === tab ? "active" : ""}`}
        onClick={() => onTabClick(tab)}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default TabNavigation;
