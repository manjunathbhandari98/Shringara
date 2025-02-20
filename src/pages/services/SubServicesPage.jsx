/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import {
  Link,
  useParams,
} from "react-router-dom";
import { useService } from "../../hooks/useService";

const SubServicesPage = () => {
  const {
    selectedServices,
    fetchSubServices,
    loading,
  } = useService();
  const { id } = useParams();

  useEffect(() => {
    fetchSubServices(id);
  }, []);

  if (loading) {
    return (
      <div className="p-5 text-center text-red-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">
        {selectedServices.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {selectedServices.subServices &&
        selectedServices.subServices.length >
          0 ? (
          selectedServices.subServices.map(
            (sub) => (
              <div
                key={sub.id}
                className="p-4 bg-black text-white rounded-lg shadow-md"
              >
                <img
                  src={
                    sub.imageUrl ||
                    "https://via.placeholder.com/150"
                  }
                  alt={sub.name}
                  className="w-full h-60 object-cover rounded-lg"
                />
                <h3 className="mt-2 text-lg font-semibold">
                  {sub.name}
                </h3>
              </div>
            )
          )
        ) : (
          <p className="text-gray-500">
            No sub-services available.
          </p>
        )}
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
