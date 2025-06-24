import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuthContext();

  if (loading) return <p>Loading...</p>;

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

// import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../services/auth";

// const ProtectedRoute = ({ children }) => {
//   const [user, setUser] = useState();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unSub = onAuthStateChanged(auth, (firebaseUser) => {
//       setUser(firebaseUser);
//       setLoading(false);
//     });
//     return () => unSub();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return user ? children : <Navigate to="/login" replace />;
// };

// export default ProtectedRoute;

//   if (!user || user.uid !== userID) {
//     return <Navigate to="/unauthorized" replace />;
//   }
