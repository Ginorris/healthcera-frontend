import React, { useState, useEffect } from "react";
import "../styles/HomePage.css";
import Header from "../components/Header";
import HomeHeader from "../components/HomeHeader";
import StatsCard from "../components/StatCard";
import FilterButton from "../components/FilterButton";
import LeaderboardTable from "../components/LeaderboardTable";
import { fetchHome } from "../api/apiCalls";

const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [data, setData] = useState([]); // Influencer data
  const [filters, setFilters] = useState(["All"]); // Dynamic filters
  const [stats, setStats] = useState({
    activeInfluencers: 0,
    claimsVerified: 0,
    averageTrustScore: "0%",
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchHome();
        console.log("response", response);

        // Set influencer data
        const formattedData = response.influencers.map((influencer, index) => ({
          rank: index + 1,
          influencer: influencer.name,
          image: influencer.pp,
          category: influencer.category,
          trustScore: influencer.score.replace("%", ""),
          followers: influencer.followers,
          verifiedClaims: influencer.verified_claims,
        }));
        setData(formattedData);

        // Dynamically extract unique categories
        const uniqueCategories = [
          "All",
          ...new Set(formattedData.map((item) => item.category)),
        ];
        setFilters(uniqueCategories);

        // Set statistics
        setStats({
          activeInfluencers: response.active_influencers || 0,
          claimsVerified: response.claims_verified || 0,
          averageTrustScore: response.average_score || "0%",
        });
      } catch (error) {
        console.error("Failed to fetch home data:", error);
      }
    };

    loadData();
  }, []);

  // Filter logic
  const filteredData =
    activeFilter === "All"
      ? data
      : data.filter((row) => row.category === activeFilter);

  return (
    <>
      <Header />
      <div className="home">
        <HomeHeader />
        <div className="home__stats">
          <StatsCard
            value={stats.activeInfluencers}
            label="Active Influencers"
          />
          <StatsCard value={stats.claimsVerified} label="Claims Verified" />
          <StatsCard
            value={stats.averageTrustScore}
            label="Average Trust Score"
          />
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
