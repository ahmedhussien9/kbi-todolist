import React from "react";

import "./button.scss";

interface ButtonProps {
  name: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, onClick: handler }) => {
  const click = () => {
    if (handler) {
      handler();
    }
  };
  return (
    <button className="btn btn__basic" onClick={click}>
      {" "}
      {name}
    
    </button>
  );
};
export default Button;
