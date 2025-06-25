import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/auth";
import { useParams } from "react-router-dom";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userID } = useParams();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unSub();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, userID }}>
      {children}
    </AuthContext.Provider>
  );
};
