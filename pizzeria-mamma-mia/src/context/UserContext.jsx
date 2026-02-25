import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token') || null);
  const [email, setEmail] = useState(() => localStorage.getItem('email') || null);

  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const login = async (userEmail, userPassword) => {
    try {
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, password: userPassword })
      });
      const data = await response.json();
      
      if (data.token) {
        setToken(data.token);
        setEmail(data.email);
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.email);
        return true;
      } else {
        alert(data.error || "Error de autenticación");
        return false;
      }
    } catch (error) {
      console.error("Error en el login:", error);
      return false;
    }
  };

  const register = async (userEmail, userPassword) => {
    try {
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, password: userPassword })
      });
      const data = await response.json();

      if (data.token) {
        setToken(data.token);
        setEmail(data.email);
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.email);
        return true;
      } else {
        alert(data.error || "Error al registrar");
        return false;
      }
    } catch (error) {
      console.error("Error en el registro:", error);
      return false;
    }
  };

  const getProfile = async () => {
    if (!token) return null;
    try {
      const response = await fetch(`${apiUrl}/api/auth/me`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener perfil:", error);
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;