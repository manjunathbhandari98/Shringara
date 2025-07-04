import axios from "axios";
import { getAuthToken } from "./AuthService";
const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

const token = getAuthToken();

// get all the info

export const getSettings = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/general-settings`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// get portfolio

export const getPorfolio = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/portfolio`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
