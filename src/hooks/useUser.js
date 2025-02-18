// useUser.js
import { useContext } from "react";
import { UserContext } from "../context/UserContext"; // Import UserContext from the separate file

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};
