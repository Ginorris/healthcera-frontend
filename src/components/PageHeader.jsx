import React from "react";
import "../styles/PageHeader.css";

const PageHeader = ({ title, backLink }) => (
  <div className="page-header">
    <a href={backLink} className="page-header__back">
      &larr; Back to Dashboard
    </a>
    <h1 className="page-header__title">{title}</h1>
  </div>
);

export default PageHeader;
