"use client";
import React, { createContext } from "react";

interface NavContextType {
  isNavOpen: boolean;
  toggleNav?: () => void;
  onCloseNav?: () => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export const useNavContext = () => {
  const context = React.useContext(NavContext);
  if (context === undefined) {
    throw new Error(
      "useNavContext debe ser usado dentro de un DashboardLayout"
    );
  }
  return context;
};

export { NavContext };
