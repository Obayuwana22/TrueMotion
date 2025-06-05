import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isFilterActive, setIsFilterActive] = useState(false);

  return (
    <GlobalContext.Provider value={{ isFilterActive, setIsFilterActive }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
