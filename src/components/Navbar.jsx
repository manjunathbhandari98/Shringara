import React from "react";
import {
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Button from "./Button";
import NavOption from "./NavOption";

const Navbar = () => {
  const navigate = useNavigate();
  const handleBookNow = () => {
    navigate("/booking");
  };
  return (
    <div className="sm:flex hidden justify-between items-center py-4 px-8 bg-transparent text-white">
      <div className="text-2xl font-bold">
        <Link to="/">
          <img
            src={Logo}
            alt=""
            width={100}
          />
        </Link>
      </div>
      {/* Navbar options */}
      <div className="space-x-8 font-[400]">
        <NavOption
          color="red"
          to="/"
        >
          Home
        </NavOption>
        <NavOption
          color="red"
          to="/services"
        >
          Services
        </NavOption>
        <NavOption
          color="red"
          to="/packages"
        >
          Packages
        </NavOption>
        <NavOption
          color="red"
          to="/portfolio"
        >
          Portfolio
        </NavOption>
        <NavOption
          color="red"
          to="/booking"
        >
          Booking
        </NavOption>
        <NavOption
          color="red"
          to="/contact"
        >
          Contact
        </NavOption>
      </div>

      {/* Book Now button on navbar */}
      <div className="booking-btn">
        <Button
          buttonText={"Book Now"}
          radius="lg"
          color="white"
          onClick={handleBookNow}
        />
      </div>
    </div>
  );
};

export default Navbar;
