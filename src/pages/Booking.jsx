import React, { useState } from "react";
import { motion } from "framer-motion";
import { useUser } from "./../hooks/useUser";
import { bookAnEvent } from "../services/bookingService";

const Booking = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    eventType: "",
    location: "",
    service: "",
    eventDate: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await bookAnEvent({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        eventType: formData.eventType,
        location: formData.location,
        service: formData.service,
        eventDate: formData.eventDate,
        message: formData.message,
      });
      setSuccess(
        response.message || "Signup successful!"
      );
      setFormData({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        eventType: "",
        location: "",
        eventDate: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setError(
        err.message || "Something went wrong!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white p-6 relative overflow-hidden">
      {/* Floating Light Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>

      {/* Booking Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg bg-gray-800 bg-opacity-30 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          🎟 Book Your Event
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          >
            <option
              value=""
              disabled
            >
              Select Event Type
            </option>
            <option value="wedding">
              💍 Wedding
            </option>
            <option value="birthday">
              🎂 Birthday Party
            </option>
            <option value="corporate">
              🏢 Corporate Event
            </option>
            <option value="anniversary">
              ❤️ Anniversary
            </option>
            <option value="others">
              ✨ Others
            </option>
          </select>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          >
            <option
              value=""
              disabled
            >
              Select Event Type
            </option>
            <option value="wedding">
              💍 Wedding
            </option>
            <option value="birthday">
              🎂 Birthday Party
            </option>
            <option value="corporate">
              🏢 Corporate Event
            </option>
            <option value="anniversary">
              ❤️ Anniversary
            </option>
            <option value="others">
              ✨ Others
            </option>
          </select>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <textarea
            name="message"
            placeholder="Additional Details (optional)"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#ff4d97] to-[#F36C3E] text-gray-900 font-semibold rounded-lg hover:scale-105 transform transition duration-300"
          >
            Submit Booking
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Booking;
