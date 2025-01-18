import React from "react";
import "../styles/SubmitButton.css";

const SubmitButton = ({ label, onClick, disabled = false }) => (
  <button
    className="submit-button"
    onClick={disabled ? undefined : onClick}
    disabled={disabled}
    style={{
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
    }}
  >
    {label}
  </button>
);

export default SubmitButton;
