import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Button from "./Button";

const MobileNavbar = () => {
  const [toggleMenu, setToggleMenu] =
    useState(false);

  const handleToggle = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <div className="sm:hidden flex bg-transparent text-white z-10 justify-between">
      {/* Menu Button */}
      <div
        className="menu-btn mt-5 mx-4 cursor-pointer"
        onClick={handleToggle}
      >
        <Menu />
      </div>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-black text-white transition-transform transform ${
          toggleMenu
            ? "translate-x-0 z-50"
            : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <X
            className="cursor-pointer"
            onClick={handleToggle}
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-start px-5 text-white space-y-6 mt-10 text-xl">
          <Link
            onClick={() => setToggleMenu(false)}
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setToggleMenu(false)}
            to="/services"
          >
            Services
          </Link>
          <Link
            onClick={() => setToggleMenu(false)}
            to="/packages"
          >
            Packages
          </Link>
          <Link
            onClick={() => setToggleMenu(false)}
            to="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            onClick={() => setToggleMenu(false)}
            to="/booking"
          >
            Booking
          </Link>
          <Link
            onClick={() => setToggleMenu(false)}
            to="/contact"
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* Overlay for background */}
      {toggleMenu && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-0"
          onClick={handleToggle}
        ></div>
      )}

      <div>
        <Link to="/">
          <img
            src={Logo}
            alt=""
            width="80px"
          />
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;
