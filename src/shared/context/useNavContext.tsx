"use client";
import React, { createContext, useState } from "react";
import SideBarDesktop, { SideBarMobile } from "../components/sidebar/SideBar";

interface NavContextType {
  isNavOpen: boolean;
  toggleNav?: () => void;
  onCloseNav?: () => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export const useNavContext = () => {
  const context = React.useContext(NavContext);
  if (context === undefined) {
    throw new Error("Ocurrio un error al acceder al contexto en useNavContext");
  }
  return context;
};

const ContextLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <NavContext.Provider
        value={{
          isNavOpen,
          toggleNav: () => setIsNavOpen(!isNavOpen),
          onCloseNav: () => setIsNavOpen(false),
        }}
      >
        <div className="flex h-screen overflow-hidden">
          <SideBarDesktop />
          <SideBarMobile />
          <main className="flex-1 overflow-auto  ">
            <div className="min-h-full">{children}</div>
          </main>
        </div>
      </NavContext.Provider>
    </>
  );
};

export default ContextLayout;
