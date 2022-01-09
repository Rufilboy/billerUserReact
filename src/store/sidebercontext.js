import React, { createContext, useState, useMemo } from "react";

const Sidebercontext = createContext();

export function SidebarProvider({ children }) {
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState([]);
  const memoizedValues = useMemo(
    () => ({
      open,
      user,

      setOpen,
      setUser,
    }),
    [open, user],
  );

  return (
    <Sidebercontext.Provider value={memoizedValues}>
      {children}
    </Sidebercontext.Provider>
  );
}

export default Sidebercontext;
