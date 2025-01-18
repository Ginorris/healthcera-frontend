import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import InputField from "../components/InputField";
import ToggleSwitch from "../components/ToggleSwitch";
import SubmitButton from "../components/SubmitButton";
import TabSelector from "../components/TabSelector";
import TimeRangeSelector from "../components/TimeRangeSelector";
import JournalSelector from "../components/JournalSelector";
import "../styles/ResearchPage.css";
import { searchClaims } from "../api/apiCalls";

const ResearchPage = () => {
  // 1) Default active tab is still "specific"
  const [activeTab, setActiveTab] = useState("specific");

  // 2) Default time range to "Last Week"
  //    The TimeRangeSelector uses strings like "lastweek", "lastmonth", etc.,
  //    so we set the initial state to "lastweek" for "Last Week."
  const [timeRange, setTimeRange] = useState("lastweek");

  // 3) Toggles default to true
  const [includeRevenue, setIncludeRevenue] = useState(true);
  const [verifyWithJournals, setVerifyWithJournals] = useState(true);

  // 4) Journals: by default, select all
  const defaultJournals = [
    "PubMed Central",
    "Nature",
    "Science",
    "Cell",
    "The Lancet",
    "New England Journal of Medicine",
    "JAMA Network",
  ];
  const [journals, setJournals] = useState(defaultJournals);

  const [influencerName, setInfluencerName] = useState("");
  const [claimsPerInfluencer, setClaimsPerInfluencer] = useState(50);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Status code → user-friendly message
  const statusMessageMap = {
    400: "Invalid input data. Please correct and try again.",
    404: "Influencer not found. Please check the name and try again.",
    500: "Server error. Please try again later.",
  };

  const handleSubmit = async () => {
    // Basic validation: influencer name required
    if (!influencerName.trim()) {
      setError("Influencer name is required!");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await searchClaims(influencerName.trim(), {
        claimsPerInfluencer,
        includeRevenue,
        verifyWithJournals,
        journals,
      });

      // If success → navigate
      navigate(
        `/influencer/${influencerName.replace(/\s+/g, "-").toLowerCase()}`,
      );
    } catch (err) {
      console.error("Error during research request:", err);

      const [codeStr, serverMessageRaw = ""] = err.message.split(":");
      const statusCode = parseInt(codeStr, 10);

      // Map known statuses, otherwise show fallback
      if (statusMessageMap[statusCode]) {
        setError(statusMessageMap[statusCode]);
      } else {
        setError(
          `Error ${statusCode || ""}: ${serverMessageRaw || "Unknown error occurred."}`,
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="research-page">
        <PageHeader title="Research Tasks" backLink="/" />

        <div className="research-page__form">
          {/* <TabSelector
            tabs={[
              { label: "Specific Influencer", value: "specific" },
              { label: "Discover New", value: "discover" },
            ]}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          /> */}

          <TimeRangeSelector
            activeRange={timeRange}
            onRangeChange={setTimeRange}
          />

          <InputField
            label="Influencer Name"
            placeholder="Enter influencer name"
            value={influencerName}
            onChange={(e) => setInfluencerName(e.target.value)}
          />

          <InputField
            label="Claims to Analyze Per Influencer"
            type="number"
            placeholder="50"
            value={claimsPerInfluencer}
            onChange={(e) => setClaimsPerInfluencer(e.target.value)}
          />

          <div className="research-page__toggles">
            <ToggleSwitch
              label="Include Revenue Analysis"
              checked={includeRevenue}
              onChange={setIncludeRevenue}
            />
            <ToggleSwitch
              label="Verify with Scientific Journals"
              checked={verifyWithJournals}
              onChange={setVerifyWithJournals}
            />
          </div>

          <JournalSelector selectedJournals={journals} onChange={setJournals} />

          <div className="research-page__submit">
            <SubmitButton
              label={loading ? "Starting..." : "Start Research"}
              onClick={handleSubmit}
              disabled={loading}
            />
          </div>

          {error && (
            <p
              className="error-message"
              style={{
                color: "#b33",
                marginTop: "12px",
              }}
            >
              {error}
            </p>
          )}

          {loading && <p className="loading-indicator">Starting research...</p>}
        </div>
      </div>
    </>
  );
};

export default ResearchPage;
