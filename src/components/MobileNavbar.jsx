import React, {
  useEffect,
  useState,
} from "react";
import {
  ArrowLeft,
  CalendarFold,
  Contact,
  GalleryHorizontal,
  HomeIcon,
  LogOutIcon,
  LucideLogOut,
  Menu,
  Package,
  Paintbrush2,
  Power,
  PowerOff,
  PowerOffIcon,
  Settings,
} from "lucide-react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Button from "./Button";
import {
  getAuthToken,
  getUserInfo,
} from "../services/AuthService"; // Ensure getUserInfo is implemented properly
import ProfileImage from "../assets/images/user.png";
import { useUser } from "../hooks/useUser";

const MobileNavbar = () => {
  const [toggleMenu, setToggleMenu] =
    useState(false);
  const navigate = useNavigate();
  const { user, setUserInfo } = useUser();
  const [showLogoutModal, setShowLogoutModal] =
    useState(false);

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

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto"; // Reset overflow on unmount
    };
  }, []);

  const handleToggle = () => {
    if (!toggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setToggleMenu((prev) => !prev);
  };

  const handleLogin = () => {
    navigate("/auth?mode=login");
    setToggleMenu(false);
  };

  const handleSignup = () => {
    navigate("/auth?mode=signup");
    setToggleMenu(false);
  };

  // Handle Logout
  const handleLogout = () => {
    hideLogoutConfirmation();
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUserInfo(null); // Clear user from context
    window.dispatchEvent(new Event("storage")); // Notify other components
    navigate("/");
  };

  // Handle hiding the logout confirmation modal
  const hideLogoutConfirmation = () => {
    setShowLogoutModal(false);
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
        className={`fixed top-0 left-0 h-screen w-2/3 bg-black text-white transition-transform transform ${
          toggleMenu
            ? "translate-x-0 z-50"
            : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex p-4 justify-between">
          <div className="">
            <ArrowLeft
              className="cursor-pointer"
              onClick={handleToggle}
            />
          </div>
          {user ? (
            <div className="flex space-x-2 items-center">
              <h2>{user.name.toUpperCase()}</h2>
              <img
                src={ProfileImage}
                alt="Profile"
                className="w-7 h-7"
              />
            </div>
          ) : (
            <></>
          )}
        </div>

        <nav className="flex flex-col items-start px-5 text-white ml-4 space-y-6 mt-10 text-xl">
          <div className="flex space-x-2 items-center">
            <HomeIcon />
            <Link
              onClick={() => setToggleMenu(false)}
              to="/"
            >
              Home
            </Link>
          </div>

          <div className="flex space-x-2 items-center">
            <Paintbrush2 />
            <Link
              onClick={() => setToggleMenu(false)}
              to="/services"
            >
              Services
            </Link>
          </div>
          <div className="flex space-x-2 items-center">
            <Package />
            <Link
              onClick={() => setToggleMenu(false)}
              to="/packages"
            >
              Packages
            </Link>
          </div>
          <div className="flex space-x-2 items-center">
            <GalleryHorizontal />
            <Link
              onClick={() => setToggleMenu(false)}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </div>
          <div className="flex space-x-2 items-center">
            <CalendarFold />
            <Link
              onClick={() => setToggleMenu(false)}
              to="/booking"
            >
              Booking
            </Link>
          </div>
          <div className="flex space-x-2 items-center">
            <Contact />
            <Link
              onClick={() => setToggleMenu(false)}
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* If user is logged in, show profile. Otherwise, show login/signup buttons */}
        {user ? (
          <div className="flex justify-between w-full absolute bottom-22 px-4">
            <button
              onClick={() =>
                setShowLogoutModal(true)
              }
              className="flex space-x-2 items-center"
            >
              <Power />
              <h2>Logout</h2>
            </button>
            <button
              onClick={() => {
                navigate("/settings");
                setToggleMenu(false);
              }}
            >
              <Settings />
            </button>
          </div>
        ) : (
          <div className="absolute bottom-20 left-5 flex flex-col space-y-3">
            <Button
              buttonText="Login"
              className="w-40 text-white py-2 px-4 rounded"
              onClick={handleLogin}
            />
            <Button
              buttonText="Signup"
              className="w-40 text-white py-2 px-4 rounded"
              onClick={handleSignup}
            />
          </div>
        )}
        {/* Logout Confirmation Modal */}
      </div>
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
          <div className="bg-white text-black p-6 rounded-lg w-72 space-y-4">
            <h3 className="text-lg font-semibold text-center">
              Are you sure you want to log out?
            </h3>
            <div className="flex justify-between">
              <Button
                buttonText="Cancel"
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={hideLogoutConfirmation}
              />
              <Button
                buttonText="Logout"
                className="bg-red-600 text-white px-4 py-2 rounded"
                onClick={handleLogout}
              />
            </div>
          </div>
        </div>
      )}
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
            alt="Logo"
            width="80px"
          />
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;
