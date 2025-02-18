import React, {
  useEffect,
  useState,
} from "react";
import { Menu, X } from "lucide-react";
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

const MobileNavbar = () => {
  const [toggleMenu, setToggleMenu] =
    useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserInfo();
      setUser(userData);
    };

    fetchUser();
  }, []);

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
        <div className="flex justify-end p-4">
          <X
            className="cursor-pointer"
            onClick={handleToggle}
          />
        </div>

        <nav className="flex flex-col items-start px-5 text-white ml-4 space-y-6 mt-10 text-xl">
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

        {/* If user is logged in, show profile. Otherwise, show login/signup buttons */}
        {user ? (
          <div className="flex flex-col items-center absolute bottom-20 left-5 space-y-3">
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            <h2 className="text-white">
              {user.name}
            </h2>
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
            alt="Logo"
            width="80px"
          />
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;
