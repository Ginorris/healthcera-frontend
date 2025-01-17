import React, { useState } from "react";
import "../styles/HomePage.css";
import Header from "../components/Header";
import HomeHeader from "../components/HomeHeader";
import StatsCard from "../components/StatCard";
import FilterButton from "../components/FilterButton";
import LeaderboardTable from "../components/LeaderboardTable";

const sampleData = [
  {
    rank: 1,
    influencer: "Dr. Peter Attia",
    category: "Medicine",
    trustScore: 94,
    trend: "up",
    followers: "1.2M+",
    verifiedClaims: 203,
    image: "https://via.placeholder.com/40",
  },
  {
    rank: 2,
    influencer: "Dr. Rhonda Patrick",
    category: "Nutrition",
    trustScore: 90,
    trend: "up",
    followers: "950K+",
    verifiedClaims: 150,
    image: "https://via.placeholder.com/40",
  },
  {
    rank: 3,
    influencer: "Dr. Chris Palmer",
    category: "Mental Health",
    trustScore: 89,
    trend: "up",
    followers: "180K+",
    verifiedClaims: 75,
    image: "https://via.placeholder.com/40",
  },
];

const filters = ["All", "Nutrition", "Fitness", "Medicine", "Mental Health"];

const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter logic
  const filteredData =
    activeFilter === "All"
      ? sampleData
      : sampleData.filter((row) => row.category === activeFilter);

  return (
    <>
      <Header />
      <div className="home">
        <HomeHeader />
        <div className="home__stats">
          <StatsCard value="1,234" label="Active Influencers" />
          <StatsCard value="25,431" label="Claims Verified" />
          <StatsCard value="85.7%" label="Average Trust Score" />
        </div>
        <div className="home__filters">
          {filters.map((filter, index) => (
            <FilterButton
              key={index}
              label={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
        </div>
        <LeaderboardTable data={filteredData} />
      </div>
    </>
  );
};

export default HomePage;
