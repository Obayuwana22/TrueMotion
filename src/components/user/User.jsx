import React from "react";
import UserNavbar from "./UserNavbar";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const User = () => {
  const { user, loading } = useAuthContext();
  const { userID } = useParams();

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" />;

  if (user.uid !== userID)
    return <Navigate to={`/home/user/${user.uid}`} replace />;

  return (
    <div className="flex">
      <UserNavbar />
      <Outlet />
    </div>
  );
};

export default User;
