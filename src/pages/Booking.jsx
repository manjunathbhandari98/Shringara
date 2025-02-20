import React, { useState } from "react";
import { motion } from "framer-motion";
import { useUser } from "./../hooks/useUser";
import { bookAnEvent } from "../services/bookingService";
import { useService } from "../hooks/useService";

const Booking = () => {
  const { user } = useUser();
  const { services } = useService();

  const [loading, setLoading] = useState(false);
  const [serviceId, setServiceId] = useState();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [selectedService, setSelectedService] =
    useState("");
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    eventType: "",
    location: "",
    service: "",
    subService: "",
    eventDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "service") {
      setSelectedService(value); // Update selected service
      setFormData({
        ...formData,
        service: value,
        subService: "",
      }); // Reset sub-service on service change
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Find selected service object
      const selectedServiceObj = services.find(
        (service) =>
          service.name === formData.service
      );
      const selectedSubServiceObj =
        selectedServiceObj?.subServices.find(
          (sub) =>
            sub.name === formData.subService
        );

      if (
        !selectedServiceObj ||
        !selectedSubServiceObj
      ) {
        throw new Error(
          "Invalid service or sub-service selection."
        );
      }

      // Extract total price from the selected sub-service
      const totalPrice =
        selectedSubServiceObj.price; // Assuming price exists in sub-service

      // Prepare the correct data with IDs
      const bookingData = {
        userId: user?.id, // Assuming user object contains an 'id'
        serviceId: selectedServiceObj.id,
        subServiceId: selectedSubServiceObj.id,
        location: formData.location,
        eventDate: formData.eventDate,
        totalPrice: totalPrice,
      };

      console.log(bookingData);

      // Send the correct data to the API
      const response = await bookAnEvent(
        bookingData
      );

      setSuccess(
        response.message || "Booking successful!"
      );
      setFormData({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        eventType: "",
        location: "",
        service: "",
        subService: "",
        eventDate: "",
      });
      setSelectedService("");
    } catch (err) {
      setError(
        err.message || "Something went wrong!"
      );
    } finally {
      setLoading(false);
    }
  };

  // Get selected service object
  const selectedServiceObj = services.find(
    (service) => service.name === selectedService
  );

  // Get sub-services of selected service (if available)
  const subServices =
    selectedServiceObj?.subServices || [];

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

          {/* Service Selection */}
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
              Select a Service
            </option>
            {services.map((service) => (
              <option
                key={service.id}
                value={service.name}
              >
                {service.name}
              </option>
            ))}
          </select>

          {/* Sub-Service Selection (Disabled if no service is selected) */}
          <select
            name="subService"
            value={formData.subService}
            onChange={handleChange}
            disabled={!selectedService}
            required
            className="w-full p-3 bg-gray-700 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option
              value=""
              disabled
            >
              {selectedService
                ? "Select a Sub-Service"
                : "Select a Service First"}
            </option>
            {subServices.map((subService) => (
              <option
                key={subService.id}
                value={subService.name}
              >
                {subService.name}
              </option>
            ))}
          </select>

          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-[#ff4d97] to-[#F36C3E] text-gray-900 font-semibold rounded-lg hover:scale-105 transform transition duration-300"
          >
            {loading
              ? "Booking..."
              : "Submit Booking"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Booking;
