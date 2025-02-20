import React, {
  useState,
  useEffect,
} from "react";
import "../assets/styles/header-animation.css";
import HeroImage from "../assets/images/home-banner.png";
import "../assets/styles/flower-border.css";
import Button from "../components/Button";
import MobileBanner from "../assets/images/mobile-banner.png";
import WhyChooseUs from "./WhyChooseUs";
import FeaturedServices from "./FeaturedServices";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleBookNow = () => {
    navigate("/booking");
  };

  const phrases = [
    "Welcome to Your Dream Decor",
    "Turning Dreams into Reality",
    "Elegant Designs, Memorable Events",
    "Your Perfect Venue, Perfectly Styled",
  ]; // Add more phrases as needed
  const [currentPhrase, setCurrentPhrase] =
    useState(0);

  // banner image based on window size (for desktop and mobile)
  const [bgImage, setBgImage] =
    useState(HeroImage);

  useEffect(() => {
    const updateImage = () => {
      setBgImage(
        window.innerWidth > 640
          ? HeroImage
          : MobileBanner
      );
    };

    updateImage();
    window.addEventListener(
      "resize",
      updateImage
    );

    return () =>
      window.removeEventListener(
        "resize",
        updateImage
      );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase(
        (prev) => (prev + 1) % phrases.length
      );
    }, 4000); // Change phrase every 4 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [phrases.length]);

  return (
    <>
      <div className="relative px-42">
        <div className="flower-border hidden sm:block"></div>
      </div>
      <div
        className="bg-cover bg-center flex flex-col items-center justify-center h-screen"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <h1
          className="text-6xl font-bold text-white text-center mb-8 drop-shadow-lg"
          key={currentPhrase} // Unique key to trigger animation when text changes
          style={{
            animation:
              "3s steps(30) 1s forwards, scaleUp 0.5s ease-out 4s, shadowPulse 2s ease-in-out infinite",
          }}
        >
          {phrases[currentPhrase]}
        </h1>
        <Button
          buttonText="Book Now"
          background="red-500"
          radius="lg"
          borderColor="transparent"
          onClick={handleBookNow}
          className="px-6 py-3 text-white text-lg font-semibold shadow-md hover:bg-red-600 transition duration-300"
        />
      </div>
      <WhyChooseUs />

      {/* Featured Services */}
      <FeaturedServices />

      {/* Testimonials */}
      <Testimonials />
    </>
  );
};

export default Home;
