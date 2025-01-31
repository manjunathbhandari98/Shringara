import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl bg-gray-800 bg-opacity-30 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-700"
      >
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-6">
          ✨ About{" "}
          <span className="text-yellow-400">
            Shringara Decorators
          </span>
        </h2>

        {/* Introduction */}
        <p className="text-gray-300 text-center mb-8">
          At{" "}
          <span className="text-yellow-400">
            Shringara Decorators
          </span>
          , we bring your dreams to life with
          mesmerizing decorations for every
          occasion. From grand weddings to elegant
          corporate events, we create
          unforgettable experiences.
        </p>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Our Story */}
          <div className="p-6 bg-gray-700 bg-opacity-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">
              📜 Our Story
            </h3>
            <p className="text-gray-400">
              Founded in 2024, Shringara
              Decorators started as a small family
              business with a vision to
              revolutionize event décor. Over the
              years, we have transformed countless
              venues with our creative designs,
              impeccable execution, and attention
              to detail.
            </p>
          </div>

          {/* Our Mission */}
          <div className="p-6 bg-gray-700 bg-opacity-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">
              🎯 Our Mission
            </h3>
            <p className="text-gray-400">
              Our mission is to craft visually
              stunning and emotionally captivating
              decorations that leave a lasting
              impression. We believe every event
              deserves elegance, sophistication,
              and a touch of magic.
            </p>
          </div>

          {/* Our Services */}
          <div className="p-6 bg-gray-700 bg-opacity-50 rounded-lg shadow-md col-span-1 md:col-span-2">
            <h3 className="text-2xl font-semibold mb-3 text-center">
              💡 What We Offer
            </h3>
            <ul className="text-gray-400 list-disc list-inside space-y-2">
              <li>
                🌸 **Wedding Stage & Venue Decor**
                - Traditional, modern, floral, and
                customized themes.
              </li>
              <li>
                🎂 **Birthday & Anniversary
                Celebrations** - Elegant setups
                with creative themes.
              </li>
              <li>
                🏢 **Corporate Event Decorations**
                - Conferences, gala nights, and
                product launches.
              </li>
              <li>
                🎊 **Festive & Religious
                Ceremonies** - Themed decorations
                for Diwali, Christmas, and
                cultural festivals.
              </li>
              <li>
                ✨ **Customized Decor Services** -
                Tailored designs for personal or
                unique events.
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-300">
            Want to make your event unforgettable?
            Let&apos;s create magic together! ✨
          </p>
          <Link to="/contact">
            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-[#ff4d97] to-[#F36C3E] cursor-pointer text-gray-900 font-semibold rounded-lg hover:scale-105 transform transition duration-300">
              📩 Contact Us
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
