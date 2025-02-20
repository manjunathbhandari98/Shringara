import React, {
  useEffect,
  useState,
} from "react";
import { Link, Outlet } from "react-router-dom"; // Import Link and Outlet
// import { getAllServices } from "../../services/serviceServices";
import { h2 } from "framer-motion/client";
import { useService } from "./../../hooks/useService";
const Services = () => {
  const { services } = useService();
  return (
    <>
      <h2 className="text-3xl font-serif text-center mb-16">
        Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 py-4 gap-5 w-full cursor-pointer">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.id}`}
            className="group relative overflow-hidden rounded-lg"
          >
            <img
              src={service.imageUrl}
              alt={service.name}
              className="w-full h-64 object-cover transition group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <h3 className="text-white text-xl font-semibold p-6">
                {service.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Services;
