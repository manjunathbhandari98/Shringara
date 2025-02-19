import axios from "axios";

const BASE_URL = import.meta.env
  .VITE_REACT_APP_API_URL;

export const bookAnEvent = async (
  bookingInfo
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/bookings/create`,
      bookingInfo,
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
        message: "Can't Book at the moment",
      }
    );
  }
};
