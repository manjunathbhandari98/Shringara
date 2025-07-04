import axios from "axios";

const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const sendAMessage = async (message) => {
  try {
    const response = await axios.post(`${BASE_URL}/message/customer`, message, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "can't send message",
      }
    );
  }
};
