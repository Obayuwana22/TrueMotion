import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuthContext();

  if (loading) return <p>Loading...</p>;

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

