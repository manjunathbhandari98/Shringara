/* eslint-disable react/prop-types */
import React from "react";

const InputField = ({
  type = "text",
  name = "",
  placeholder = "",
  value,
  onChange,
  onFocus,
  required = true,
  className = "",
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      required={required}
      className={`w-full p-3 bg-gray-700 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition ${className}`}
    />
  );
};

export default InputField;
