import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // Estado del token (false por defecto )
  const [token, setToken] = useState(false);

  const logout = () => {
    setToken(false);
  };
  const login = () =>{
    setToken(true);
  };
  return (
    <UserContext.Provider value={{ token, logout, login }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;