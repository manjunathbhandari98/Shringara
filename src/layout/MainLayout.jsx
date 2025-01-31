/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import MobileNavbar from "../components/MobileNavbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col text-white min-h-screen bg-gradient-to-b from-[#010101] to-black">
      {/* Navbar */}
      <Navbar />

      {/* Mobile Navbar */}
      <MobileNavbar />
      {/* Main content */}
      <main className="flex-grow bg-cover bg-center">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
