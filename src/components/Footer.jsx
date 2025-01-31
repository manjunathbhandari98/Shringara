import React from "react";
import {
  Sparkles,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t-1 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold">
              <Link to="/">
                <img
                  src={Logo}
                  alt=""
                  width={100}
                />
              </Link>
            </div>
            <p className="text-gray-400">
              Creating magical moments and
              unforgettable memories for your
              special occasions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-rose-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-rose-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-rose-500"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-rose-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Contact Info
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +91 938-849-3894
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@shringara.com
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-rose-500"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-rose-500"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-rose-500"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Shringara Decorators. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
