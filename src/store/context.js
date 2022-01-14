import React, { createContext, useState, useMemo, useReducer } from "react";
import { formReducer } from "./reducers";

const Context = createContext();

export function Provider({ children }) {
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [formData, formDispatch] = useReducer(formReducer, {});

  const handleLogin = (user, token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));
    console.log(user);
    setUser(user.data);
    setToken(token);
  };

  const memoizedValues = useMemo(
    () => ({
      open,
      user,
      token,
      formData,

      setOpen,
      setUser,
      handleLogin,
      formDispatch,
    }),
    [open, user],
  );

  return <Context.Provider value={memoizedValues}>{children}</Context.Provider>;
}

export default Context;
