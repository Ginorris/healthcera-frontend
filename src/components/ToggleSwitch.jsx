import React from "react";
import "../styles/ToggleSwitch.css";

const ToggleSwitch = ({ label, checked, onChange }) => (
  <div className="toggle-switch">
    <label className="toggle-switch__label">
      <span>{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="toggle-switch__input"
      />
      <span className="toggle-switch__slider"></span>
    </label>
  </div>
);

export default ToggleSwitch;
