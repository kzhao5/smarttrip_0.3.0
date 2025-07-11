import React from "react";
import { Navigate } from "react-router-dom";
import { AuthService } from "../services/authService";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = AuthService.isAuthenticated();

  if (!isAuthenticated) {
    // If user is not logged in, redirect to login page
    return <Navigate to="/auth" replace />;
  }

  // If user is logged in, render child components
  return children;
};

export default ProtectedRoute;
