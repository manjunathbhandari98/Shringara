/* eslint-disable react/prop-types */
import React from "react";
import {
  Link,
  useParams,
} from "react-router-dom";
import { services } from "./servicesAvailable";

const SubServicesPage = () => {
  const { id } = useParams();
  const service = services.find(
    (s) => s.id.toString() === id
  );
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">
        {service.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {service.subServices.map((sub, index) => (
          <div
            key={index}
            className="p-4 bg-black text-white rounded-lg shadow-md"
          >
            <img
              src={
                sub.subImg ||
                "https://via.placeholder.com/150"
              }
              alt={sub.subTitle}
              className="w-full h-60 object-cover rounded-lg"
            />
            <h3 className="mt-2 text-lg font-semibold">
              {sub.subTitle}
            </h3>
          </div>
        ))}
      </div>
      <Link
        to="/services"
        className="block mt-4 text-blue-500"
      >
        ← Back to Services
      </Link>
    </div>
  );
};

export default SubServicesPage;
