import React from "react";
import "../styles/ClaimList.css";

const ClaimsList = ({ claims }) => (
  <div className="claims-list">
    {claims.map((claim, index) => (
      <div key={index} className="claims-list__item">
        <div className="claims-list__header">
          <span className={`claims-list__status ${claim.validation.toLowerCase()}`}>
            {claim.validation}
          </span>
          <span className="claims-list__date">{claim.created}</span>
        </div>
        <h3 className="claims-list__title">{claim.claim}</h3>
        <p className="claims-list__analysis">{claim.analysis}</p>
        <div className="claims-list__footer">
          <a href={claim.source} className="claims-list__source">
            View Source
          </a>
          <span className="claims-list__trust-score">{claim.score}%</span>
        </div>
      </div>
    ))}
  </div>
);

export default ClaimsList;
