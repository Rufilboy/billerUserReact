import React, { createContext, useState, useMemo } from "react";

const Sidebercontext = createContext();

export function SidebarProvider({ children }) {
  const [open, setOpen] = useState(true);
  const memoizedValues = useMemo(
    () => ({
      open,
      setOpen,
    }),
    [open]
  );

  return (
    <Sidebercontext.Provider value={memoizedValues}>
      {children}
    </Sidebercontext.Provider>
  );
}

export default Sidebercontext;
