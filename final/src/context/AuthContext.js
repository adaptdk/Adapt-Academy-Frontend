import React, { useState, useEffect, createContext } from "react";
import ApiFactory from "../mock";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    ApiFactory.getInstance()
      .get("/api/is-admin")
      .then(({ data }) => {
        setAuth(data.isAdmin);
      })
      .catch(error => {
        console.log(error.response);
      })
      .catch(error => {
        // TODO: Display nice error message.
        console.log(error.response);
      });
  }, []);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
