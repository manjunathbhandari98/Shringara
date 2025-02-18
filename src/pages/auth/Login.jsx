import React, { useState } from "react";
import { loginUser } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For redirection
  const { setUserInfo } = useUser(); // Get setUserInfo function from context

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
      const response = await loginUser(formData);

      // Store token in local storage
      localStorage.setItem(
        "authToken",
        response.token
      );

      // Assuming the response contains user info
      const user = response.user; // This depends on your API response
      localStorage.setItem(
        "user",
        JSON.stringify(user)
      ); // Save user to local storage

      // Update context with user info immediately after login
      setUserInfo(user);
      window.dispatchEvent(new Event("storage")); // Force re-render for other components

      // Redirect to home or dashboard
      navigate("/");
      console.log(user);
    } catch (err) {
      setError(
        err.message || "Invalid credentials!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6">
        🔑 Login
      </h2>
      {error && <p className="error">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
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
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-3 bg-gray-700 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-[#ff4d97] to-[#F36C3E] text-gray-900 font-semibold rounded-lg hover:scale-105 transform transition duration-300"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
