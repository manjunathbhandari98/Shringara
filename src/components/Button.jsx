/* eslint-disable react/prop-types */
import React from "react";

const Button = ({
  buttonText,
  radius,
  color,
  background,
  className,
  borderColor,
  onClick,
  ...props
}) => {
  return (
    <button
      className={`relative group bg-${background} py-2 px-3 border border-${borderColor} rounded-${radius} cursor-pointer text-${color} font-medium overflow-hidden transition-all duration-300 ${className}`}
      onClick={onClick}
      {...props}
    >
      {buttonText}{" "}
    </button>
  );
};

export default Button;
