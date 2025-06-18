import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);
  const [isFilterActive, setIsFilterActive] = useState(false);
  // const [selectedCar, setSelectedCar] = useState(null);

  return (
    <GlobalContext.Provider value={{ isFilterActive, setIsFilterActive,userID, setUserID }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
