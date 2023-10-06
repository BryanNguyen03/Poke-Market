import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  // Get the authentication context created by AuthContextProvider
  const context = useContext(AuthContext);

  // Check if context is null
  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }

  // return if not null
  return context;
};
