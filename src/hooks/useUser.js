// useUser.js
import { useContext } from "react";
import { UserContext } from "../context/user/UserContext"; // Import UserContext from the separate file

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};
