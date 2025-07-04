import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileImage from "../assets/images/user.png";
import { useUser } from "../hooks/useUser";
import { getUserInfo } from "../services/AuthService";
import { getSettings } from "../services/settings";
import NavOption from "./NavOption";

const Navbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, setUserInfo } = useUser();
  const dropdownRef = useRef(null); // Ref for dropdown menu
  const [logo, setLogo] = useState();

  useEffect(() => {
    const fetchLogo = async () => {
      const response = await getSettings();
      setLogo(response.logoUrl);
    };

    const fetchUser = async () => {
      try {
        const userData = await getUserInfo();
        setUserInfo(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchLogo();
    fetchUser();
    const handleStorageChange = () => {
      fetchUser();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [setUserInfo]);

  // Hide dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUserInfo(null);
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };

  return (
    <div className="sm:flex hidden justify-between items-center py-4 px-8 bg-transparent text-white">
      <div className="text-2xl font-bold">
        <Link to="/">
          <img src={logo} alt="Shringara" width={100} />
        </Link>
      </div>

      <div className="space-x-8 font-[400]">
        <NavOption color="red" to="/">
          Home
        </NavOption>
        <NavOption color="red" to="/services">
          Services
        </NavOption>
        <NavOption color="red" to="/portfolio">
          Portfolio
        </NavOption>
        <NavOption color="red" to={user ? "/booking" : "/auth?mode=login"}>
          Booking
        </NavOption>
        <NavOption color="red" to="/contact">
          Contact
        </NavOption>
      </div>

      {/* Profile Section */}
      <div className="relative pr-8" ref={dropdownRef}>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="focus:outline-none cursor-pointer"
        >
          {user && user.name ? (
            <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full text-white text-lg font-semibold">
              {user.name.charAt(0).toUpperCase()}
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
