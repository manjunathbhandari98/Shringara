import React, {
  useState,
  useEffect,
} from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import Logo from "../assets/images/logo.png";
import ProfileImage from "../assets/images/user.png";
import {
  logoutUser,
  getUserInfo,
} from "../services/AuthService";
import NavOption from "./NavOption";
import { useUser } from "../hooks/useUser";

const Navbar = () => {
  const navigate = useNavigate(); // Track the user
  const [showDropdown, setShowDropdown] =
    useState(false);
  const { user, setUserInfo } = useUser();

  const fetchUser = async () => {
    try {
      const userData = await getUserInfo();
      console.log("Fetched User:", userData);
      setUserInfo(userData); // Store user data in context
    } catch (error) {
      console.error(
        "Error fetching user data:",
        error
      );
    }
  };

  useEffect(() => {
    fetchUser(); // Fetch user when component mounts

    // Listen for storage changes (Login & Logout)
    const handleStorageChange = () => {
      fetchUser(); // Fetch user again when localStorage updates
    };

    window.addEventListener(
      "storage",
      handleStorageChange
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorageChange
      );
    };
  }, []); // This effect will only run once when the component mounts

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUserInfo(null); // Clear user from context
    window.dispatchEvent(new Event("storage")); // Notify other components
    navigate("/");
  };

  return (
    <div className="sm:flex hidden justify-between items-center py-4 px-8 bg-transparent text-white">
      <div className="text-2xl font-bold">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
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

      {/* Profile Section */}
      <div className="relative pr-8">
        <button
          onClick={() =>
            setShowDropdown(!showDropdown)
          }
          className="focus:outline-none"
        >
          {user && user.name ? (
            <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full text-white text-lg font-semibold">
              {user.name.charAt(0).toUpperCase()}{" "}
              {/* This will show the first letter of the name */}
            </div>
          ) : (
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
          )}
        </button>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div className="absolute z-10 right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
            {user ? (
              <>
                <button
                  className="cursor-pointer block px-4 py-2 w-full text-left hover:bg-gray-200 hover:rounded-lg"
                  onClick={() => {
                    navigate("/settings");
                    setShowDropdown(false);
                  }}
                >
                  Settings
                </button>
                <button
                  className="cursor-pointer block px-4 py-2 w-full text-left hover:bg-gray-200 hover:rounded-lg"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="cursor-pointer block px-4 py-2 w-full text-left hover:bg-gray-200 hover:rounded-lg"
                  onClick={() => {
                    navigate("/auth?mode=login");
                    setShowDropdown(false);
                  }}
                >
                  Login
                </button>
                <button
                  className="cursor-pointer block px-4 py-2 w-full text-left hover:bg-gray-200 hover:rounded-lg"
                  onClick={() => {
                    navigate("/auth?mode=signup");
                    setShowDropdown(false);
                  }}
                >
                  Signup
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
