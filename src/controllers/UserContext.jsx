import React, { createContext, useContext, useState } from 'react';
import { loginUser, registerUser } from '../services/api';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      const { data } = await loginUser({ email, password });
      setUser(data);
      return true;
    } catch (error) {
      alert('Invalid email or password');
      return false;
    }
  };

  const handleRegister = async (name, email, password) => {
    try {
      const { data } = await registerUser({ name, email, password });
      setUser(data);
      return true;
    } catch (error) {
      alert('User already exists');
      return false;
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, handleLogin, handleRegister }}>
      {children}
    </UserContext.Provider>
  );
};
