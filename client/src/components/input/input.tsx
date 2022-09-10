import React, { useEffect, useState } from "react";

import "./input.scss";

interface InputProps {
  placeholder?: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({ placeholder, inputRef }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      ref={inputRef}
      className="input"
    />
  );
};
export default Input;
