import React, { createContext, useState, useMemo } from "react";

const Context = createContext();

export function Provider({ children }) {
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

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

      setOpen,
      setUser,
      handleLogin,
    }),
    [open, user],
  );

  return <Context.Provider value={memoizedValues}>{children}</Context.Provider>;
}

export default Context;
