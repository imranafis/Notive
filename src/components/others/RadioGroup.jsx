const RadioGroup = ({ name, options, onRadioChange, selectedValue }) => {
  const handleRadioChange = (e) => {
    const { id, value } = e.target;
    onRadioChange({ id, value });
  };

  return (
    <div className={`${name}`}>
      {options.map(({ id, value, label, bubbleClass }, index) => (
        <label key={index}>
          <input
            type="radio"
            name={name}
            id={id}
            value={value}
            checked={selectedValue === value} // 👈 control the checked radio
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
