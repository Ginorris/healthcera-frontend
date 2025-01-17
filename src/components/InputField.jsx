import React from "react";
import "../styles/InputField.css";

const InputField = ({
  label,
  placeholder,
  type = "text",
  textarea = false,
}) => (
  <div className="input-field">
    {label && <label className="input-field__label">{label}</label>}
    {textarea ? (
      <textarea
        className="input-field__textarea"
        placeholder={placeholder}
      ></textarea>
    ) : (
      <input
        className="input-field__input"
        type={type}
        placeholder={placeholder}
      />
    )}
  </div>
);

export default InputField;
