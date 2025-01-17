import React, { useState } from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import InputField from "../components/InputField";
import ToggleSwitch from "../components/ToggleSwitch";
import SubmitButton from "../components/SubmitButton";
import TabSelector from "../components/TabSelector";
import TimeRangeSelector from "../components/TimeRangeSelector";
import JournalSelector from "../components/JournalSelector";
import "../styles/ResearchPage.css";

const ResearchPage = () => {
  const [activeTab, setActiveTab] = useState("specific");
  const [timeRange, setTimeRange] = useState("lastMonth");
  const [includeRevenue, setIncludeRevenue] = useState(true);
  const [verifyJournals, setVerifyJournals] = useState(true);
  const [journals, setJournals] = useState([]);

  return (
    <>
      <Header />
      <div className="research-page">
        <PageHeader title="Research Tasks" backLink="/" />
        <div className="research-page__form">
          <TabSelector
            tabs={[
              { label: "Specific Influencer", value: "specific" },
              { label: "Discover New", value: "discover" },
            ]}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <TimeRangeSelector
            activeRange={timeRange}
            onRangeChange={setTimeRange}
          />
          <InputField
            label="Influencer Name"
            placeholder="Enter influencer name"
          />
          <InputField
            label="Claims to Analyze Per Influencer"
            type="number"
            placeholder="50"
          />
          <div className="research-page__toggles">
            <ToggleSwitch
              label="Include Revenue Analysis"
              checked={includeRevenue}
              onChange={setIncludeRevenue}
            />
            <ToggleSwitch
              label="Verify with Scientific Journals"
              checked={verifyJournals}
              onChange={setVerifyJournals}
            />
          </div>
          <JournalSelector selectedJournals={journals} onChange={setJournals} />
          <InputField
            label="Notes for Research Assistant"
            placeholder="Add specific instructions..."
            textarea
          />
          <div className="research-page__submit">
            <SubmitButton label="Start Research" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResearchPage;
