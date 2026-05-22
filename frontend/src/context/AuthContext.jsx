import React, { createContext, useContext, useState } from 'react';
import request from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const login = async (email, password) => {
    const data = await request('/auth/login', { method: 'POST', body: { email, password } });
    setUserId(data.userId);
  };

  const register = async (name, email, password) => {
    const data = await request('/auth/register', { method: 'POST', body: { name, email, password } });
    setUserId(data.userId);
  };

  const logout = async () => {
    await request('/auth/logout', { method: 'POST' });
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ userId, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
