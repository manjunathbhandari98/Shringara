/* eslint-disable react/prop-types */
// UserProvider.js
import React, {
  useState,
  useCallback,
} from "react";
import { UserContext } from "./UserContext"; // Import UserContext from the separate file

// UserContext Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setUserInfo = useCallback((userData) => {
    setUser(userData); // Update user data and trigger re-render
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUserInfo }}
    >
      {children}
    </UserContext.Provider>
  );
};
