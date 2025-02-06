import React from "react";

const RadioGroup = ({ name, options, onRadioChange }) => {
  const handleRadioChange = (e) => {
    const { id, value } = e.target;
    onRadioChange({ id, value });
  };

  return (
    <div className={`${name}`}>
      {options.map(({ id, value, label, bubbleClass }) => (
        <label key={value}>
          <input
            type="radio"
            name={name}
            id={id}
            value={value}
            onChange={handleRadioChange}
          />
          <span className={`bubble ${bubbleClass}`}></span>
          {label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
