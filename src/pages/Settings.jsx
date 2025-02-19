import React, {
  useState,
  useEffect,
} from "react";
import { updateUser } from "../services/AuthService";
import { useUser } from "../hooks/useUser";
import InputField from "../components/InputField";

import { motion } from "framer-motion";

const Settings = () => {
  const { user, setUserInfo } = useUser();

  // Ensure that user is not null before setting the formData
  const [formData, setFormData] = useState({
    name: user?.name || "", // Use a fallback value of an empty string if user is null
    email: user?.email || "", // Fallback value
    phone: user?.phone || "", // Fallback value
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        phone: user.phone,
      });
    }
  }, [user]); // Run the effect when user data is available

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      const response = await updateUser({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });
      setSuccess(
        response.message ||
          "User updated successfully.."
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    return (
      <div className="text-center text-white">
        Loading user data...
      </div>
    );
  }

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
          📝 Settings
        </h2>
        {error && (
          <p className="text-red-500">{error}</p>
        )}
        {success && (
          <p className="text-green-500">
            {success}
          </p>
        )}
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <InputField
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            type="email"
            name="email"
            placeholder="Enter mail"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            type="phone"
            name="phone"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="cursor-pointer w-full py-3 bg-gradient-to-r from-[#ff4d97] to-[#F36C3E] text-gray-900 font-semibold rounded-lg hover:scale-105 transform transition duration-300"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Settings;
