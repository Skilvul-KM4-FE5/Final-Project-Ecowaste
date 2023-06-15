// @ts-nocheck
import axios from "axios";
import { createContext, useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [checkingUser, setCheckingUser] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setCheckingUser(false);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ currentUser, isLoggedIn, register, login, logout }}>{!checkingUser && children}</AuthContext.Provider>
    </>
  );
};
