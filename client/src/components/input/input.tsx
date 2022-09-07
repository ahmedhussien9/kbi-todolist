import React, { useEffect, useState } from "react";

import "./input.scss";

interface InputProps {
  placeholder?: string;
  inputRef: React.RefObject<HTMLInputElement>;
  onChangeInput: (event: any) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  inputRef,
  onChangeInput,
}) => {
  const onChangeInputValue = (event: any) => {
    onChangeInput(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      ref={inputRef}
      onChange={onChangeInputValue}
      className="input"
    />
  );
};
export default Input;
