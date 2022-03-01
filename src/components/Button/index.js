import React from "react";

const ButtonComponent = ({text, handleClick, type}) => (
  <button type={type} onClick={handleClick}>
    {text}
  </button>
);

export default ButtonComponent;