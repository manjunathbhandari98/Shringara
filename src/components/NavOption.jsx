/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

const NavOption = ({ to, children, color }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative group ${
          isActive && "font-bold text-gray-200"
        }`
      }
    >
      {children}
      <span
        className={`absolute bottom-[-4px] left-0 w-0 h-[2px] bg-${color}-500 transition-all duration-300 group-hover:w-full`}
      ></span>
    </NavLink>
  );
};

export default NavOption;
