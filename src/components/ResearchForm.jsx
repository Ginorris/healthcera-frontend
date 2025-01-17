import React, { useState } from "react";
import TabSelector from "./TabSelector";
import TimeRangeSelector from "./TimeRangeSelector";
import InputField from "./InputField";
import ToggleSwitch from "./ToggleSwitch";
import JournalSelector from "./JournalSelector";
import SubmitButton from "./SubmitButton";
import "../styles/ResearchForm.css";

const ResearchForm = () => {
  const [activeTab, setActiveTab] = useState("specific");
  const [timeRange, setTimeRange] = useState("lastMonth");
  const [journals, setJournals] = useState([]);
  const [includeRevenue, setIncludeRevenue] = useState(true);
  const [verifyJournals, setVerifyJournals] = useState(true);

  const handleJournalChange = (updatedJournals) => setJournals(updatedJournals);

  return (
    <div className="research-form">
      <TabSelector
        tabs={[
          { label: "Specific Influencer", value: "specific" },
          { label: "Discover New", value: "discover" },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <TimeRangeSelector activeRange={timeRange} onRangeChange={setTimeRange} />
      <InputField label="Influencer Name" placeholder="Enter influencer name" />
      <InputField
        label="Claims to Analyze Per Influencer"
        type="number"
        placeholder="50"
      />
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
      <JournalSelector
        selectedJournals={journals}
        onChange={handleJournalChange}
      />
      <InputField
        label="Notes for Research Assistant"
        placeholder="Add any specific instructions or focus areas..."
        textarea
      />
      <SubmitButton label="Start Research" />
    </div>
  );
};

export default ResearchForm;
