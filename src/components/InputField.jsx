import React from "react";
import "../styles/InputField.css";

const InputField = ({
  label,
  placeholder,
  type = "text",
  textarea = false,
  value,
  onChange,
}) => {
  return (
    <div className="input-field">
      {label && <label className="input-field__label">{label}</label>}

      {textarea ? (
        <textarea
          className="input-field__textarea"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className="input-field__input"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default InputField;
