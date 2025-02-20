import { useEffect, useState } from "react";
import {
  getAllServices,
  getSubServices,
} from "../../services/serviceServices";
import { ServiceContext } from "./serviceContext";

/* eslint-disable react/prop-types */
export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] =
    useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all services
  const fetchServices = async () => {
    setLoading(true);
    try {
      const response = await getAllServices();
      setServices(response);
    } catch (error) {
      console.error(
        "Error fetching services:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  // Fetch sub-services for a specific service ID
  const fetchSubServices = async (serviceId) => {
    setLoading(true);
    try {
      const response = await getSubServices(
        serviceId
      );

      setSelectedServices(response);
    } catch (error) {
      console.error(
        "Error fetching sub-services:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <ServiceContext.Provider
      value={{
        services,
        selectedServices,
        fetchServices,
        fetchSubServices,
        loading,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
