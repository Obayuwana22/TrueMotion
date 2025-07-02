import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth} from "../services/auth";


const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  // const navigate = useNavigate();
  const currency = import.meta.env.VITE_CURRENCY;

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);



  const value = {
    // navigate,
    currency,
    token,
    setToken,
    user,
    setUser,
    isOwner,
    setIsOwner,
    pickupDate,
    setPickupDate,
    returnDate,
    setReturnDate,
    cars,
    setCars,
    loading,
    setLoading,
    // logout,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

//  function to check if user is logged in
// const fetchUser = async () => {
//   try {
//     const { data } = await axios.get("/api/user/data");
//     if (data.success) {
//       setUser(data.user);
//       setIsOwner(data.user.role === "owner");
//     } else {
//       Navigate("/");
//     }
//   } catch (error) {
//     toast.error(error.message);
//   }
// };

// Function to fetch all cars from the server
// const fetchCars = async () => {
//   try {
//     const { data } = await axios.get("/api/user/cars");
//     data.success ? setCars(data.cars) : toast.error(data.message);
//   } catch (error) {
//     toast.error(error.message);
//   }
// };

// Function to logout user
// const logout = () => {
//   localStorage.removeItem("token");
//   setToken(null);
//   setUser(null);
//   setOwner(false);
//   axios.defaults.headers.common["Authorization"] = ``;
//   toast.success("You have been logged out");
// };

// useEffect to retrieve the token from localstorage
// useEffect(() => {
//   const token = localStorage.getItem("token");
//   setToken(token);
// fetchCars();
// }, []);

// useEffect to fetch user data when token is available
// useEffect(() => {
//   if (token) {
//     axios.defaults.headers.common["Authorization"] = `${token}`;
//     fetchUser();
//   }
// }, [token]);
