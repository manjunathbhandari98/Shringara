import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("📩 Your message has been sent!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-800 bg-opacity-30 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-700"
      >
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            📞 Contact Us
          </h2>
          <p className="text-gray-400">
            We&lsquo;d love to hear from you!
            Reach out to us anytime.
          </p>

          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-yellow-400" />
            <p className="text-lg">
              info@shringara.com
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-yellow-400" />
            <p className="text-lg">
              +938-489-8384
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
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
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#ff4d97] to-[#F36C3E] text-gray-900 font-semibold rounded-lg hover:scale-105 transform transition duration-300"
          >
            ✉️ Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
