import React, { createContext, useState } from 'react';
import { useContext } from 'react';


export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };
  console.log(user)

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <DataContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);