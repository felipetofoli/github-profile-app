import React from "react";

const InputFieldComponent = ({ value, handleChange, type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default InputFieldComponent;
