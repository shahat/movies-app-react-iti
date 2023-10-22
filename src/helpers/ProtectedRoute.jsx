import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";



const ProtectedRoute = ({ isLoggedIn, children }) => {
  const isLogged = useSelector((state) => state.isLogged.isLogged);
  if (isLogged) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
export default ProtectedRoute;

