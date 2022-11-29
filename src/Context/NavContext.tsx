import React, { createContext, useContext, useMemo, useState } from "react";

type State = string;
type NavContextProps = { children: React.ReactNode };

export const NavContext = createContext("");

const NavProvider = ({ children }: NavContextProps) => {
  const [activeNavLinkId, setActiveNavLinkId] = useState<State>("");

  const providerValue = {
    activeNavLinkId,
    setActiveNavLinkId,
  };

  return (
    <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
  );
};

const useNavContext = () => {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error("useNavContext must be used within a NavContextProvider");
  }
  return context;
};

export { useNavContext, NavProvider };
