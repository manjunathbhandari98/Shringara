import axios from "axios";

const BASE_URL = import.meta.env
  .VITE_REACT_APP_API_URL;

// Fetch all services
export const getAllServices = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/services`
    );
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Failed to fetch services",
      }
    );
  }
};

// Fetch a single service by ID
export const getServiceById = async (
  serviceId
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/services/${serviceId}`
    );
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Failed to fetch service",
      }
    );
  }
};

// Create a new service
export const createService = async (
  serviceData
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/services`,
      serviceData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Failed to create service",
      }
    );
  }
};

// Update an existing service
export const updateService = async (
  serviceId,
  updateData
) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/services/${serviceId}`,
      updateData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Failed to update service",
      }
    );
  }
};

// Delete a service
export const deleteService = async (
  serviceId
) => {
  try {
    await axios.delete(
      `${BASE_URL}/services/${serviceId}`
    );
    return {
      message: "Service deleted successfully",
    };
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Failed to delete service",
      }
    );
  }
};

// Fetch all subservices of a service
export const getSubServices = async (
  serviceId
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/services/${serviceId}`
    );
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Failed to fetch subservices",
      }
    );
  }
};

// Fetch a single subservice by ID
export const getSubServiceById = async (
  subServiceId
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/subservices/${subServiceId}`
    );
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Failed to fetch subservice",
      }
    );
  }
};

// Create a new subservice
export const createSubService = async (
  serviceId,
  subServiceData
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/services/${serviceId}/subservices`,
      subServiceData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Failed to create subservice",
      }
    );
  }
};

// Update an existing subservice
export const updateSubService = async (
  subServiceId,
  updateData
) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/subservices/${subServiceId}`,
      updateData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Failed to update subservice",
      }
    );
  }
};

// Delete a subservice
export const deleteSubService = async (
  subServiceId
) => {
  try {
    await axios.delete(
      `${BASE_URL}/subservices/${subServiceId}`
    );
    return {
      message: "Subservice deleted successfully",
    };
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Failed to delete subservice",
      }
    );
  }
};
