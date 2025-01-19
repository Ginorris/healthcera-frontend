import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import InfluencerHeader from "../components/InfluencerHeader";
import StatsCard from "../components/StatCard";
import TabNavigation from "../components/TabNavigation";
import FilterSection from "../components/FilterSection";
import ClaimsList from "../components/ClaimList";
import "../styles/InfluencerPage.css";
import { fetchInfluencer } from "../api/apiCalls";

const InfluencerPage = () => {
  const { name } = useParams();
  const [activeTab, setActiveTab] = useState("Claims Analysis");
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    statuses: [],
    searchTerm: "",
  });
  const [influencerData, setInfluencerData] = useState(null);
  const [claims, setClaims] = useState([]);
  const [stats, setStats] = useState([]);
  const [categories, setCategories] = useState(["All Categories"]);
  const [statuses, setStatuses] = useState(["All Statuses"]);

  useEffect(() => {
    const loadInfluencerData = async () => {
      try {
        const response = await fetchInfluencer(name);

        // Set influencer data
        setInfluencerData({
          name: response.name,
          tags: response.tags || [],
          description: response.description,
          image: response.pp,
        });

        // Set statistics
        setStats([
          { value: response.score, label: "Trust Score" },
          { value: response.revenue || "$0", label: "Yearly Revenue" },
          { value: response.products || "0", label: "Products" },
          { value: response.followers, label: "Followers" },
        ]);

        // Set claims and dynamically extract categories and statuses
        const claimsData = response.claims || [];
        setClaims(claimsData);

        // Dynamically extract unique categories and statuses
        const uniqueCategories = [
          "All Categories",
          ...new Set(claimsData.map((claim) => claim.category)),
        ];
        const uniqueStatuses = [
          "All Statuses",
          ...new Set(claimsData.map((claim) => claim.validation)),
        ];

        setCategories(uniqueCategories);
        setStatuses(uniqueStatuses);
      } catch (error) {
        console.error("Failed to fetch influencer data:", error);
      }
    };

    loadInfluencerData();
  }, [name]);

  const handleFilterChange = (type, value) => {
    setActiveFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
  
      if (type === "searchTerm") {
        // Directly update the search term
        updatedFilters.searchTerm = value;
      } else {
        if (value === "All Categories" || value === "All Statuses") {
          updatedFilters[type] = []; // Reset the corresponding filter
        } else {
          if (updatedFilters[type].includes(value)) {
            // Remove value if already selected
            updatedFilters[type] = updatedFilters[type].filter(
              (item) => item !== value
            );
          } else {
            // Add value if not already selected
            updatedFilters[type] = [...updatedFilters[type], value];
          }
        }
      }
  
      return updatedFilters;
    });
  };

  // Filter claims based on active filters
  const filteredClaims = claims.filter((claim) => {
    const matchesCategory =
      activeFilters.categories.length === 0 ||
      activeFilters.categories.includes(claim.category);

    const matchesStatus =
      activeFilters.statuses.length === 0 ||
      activeFilters.statuses.includes(claim.validation);

    const matchesSearchTerm =
      activeFilters.searchTerm === "" ||
      claim.claim
        .toLowerCase()
        .includes(activeFilters.searchTerm.toLowerCase());

    return matchesCategory && matchesStatus && matchesSearchTerm;
  });

  if (!influencerData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div>
        <InfluencerHeader {...influencerData} />
        <div className="influencer-page__stats">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              value={stat.value}
              label={stat.label}
              tags={categories}
            />
          ))}
        </div>
        {/* <TabNavigation
          tabs={["Claims Analysis", "Recommended Products", "Monetization"]}
          activeTab={activeTab}
          onTabClick={setActiveTab}
        /> */}
        <FilterSection
          categories={categories}
          statuses={statuses}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
        />
        <ClaimsList claims={filteredClaims} />
      </div>
    </>
  );
};

export default InfluencerPage;
