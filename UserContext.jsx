import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // Estado del token (true por defecto según requerimiento)
  const [token, setToken] = useState(true);

  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, logout, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;