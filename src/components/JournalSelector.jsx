import React from "react";
import "../styles/JournalSelector.css";

const JournalSelector = ({ selectedJournals, onChange }) => {
  const journals = [
    "PubMed Central",
    "Nature",
    "Science",
    "Cell",
    "The Lancet",
    "New England Journal of Medicine",
    "JAMA Network",
  ];

  const toggleJournal = (journal) => {
    if (selectedJournals.includes(journal)) {
      onChange(selectedJournals.filter((item) => item !== journal));
    } else {
      onChange([...selectedJournals, journal]);
    }
  };

  return (
    <div className="journal-selector">
      <div className="journal-selector__list">
        {journals.map((journal) => (
          <button
            key={journal}
            className={`journal-selector__item ${
              selectedJournals.includes(journal) ? "selected" : ""
            }`}
            onClick={() => toggleJournal(journal)}
          >
            {journal}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JournalSelector;
