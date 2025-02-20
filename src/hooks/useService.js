import { useContext } from "react"; // Import UserContext from the separate file
import { ServiceContext } from "../context/service/serviceContext";

// Custom hook to use the UserContext
export const useService = () => {
  return useContext(ServiceContext);
};
