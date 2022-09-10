import React from "react";

import "./button.scss";

interface ButtonProps {
  name?: string;
  onClick?: () => void;
  isUpdate?: boolean;
  isIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  name,
  onClick: handler,
  isUpdate,
  isIcon,
}) => {
  const click = () => {
    if (handler) {
      handler();
    }
  };

  const renderIcon = () => {
    if (!isUpdate) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          height="20px"
          className="delete"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          height="20px"
        >
          <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
          <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
        </svg>
      );
    }
  };

  return (
    <button
      className={`btn btn__basic ${isIcon ? "btn__icon" : ""}`}
      onClick={click}
    >
      {isIcon ? renderIcon() : name}
    </button>
  );
};
export default Button;
