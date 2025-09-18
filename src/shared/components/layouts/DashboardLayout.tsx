"use client";

import React, { useState } from "react";
import { NavContext } from "@/shared/context/useNavContext";
import SideBarDesktop, { SideBarMobile } from "../sidebar/SideBar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
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
        <main className="flex-1 overflow-auto">
          <div className="min-h-full">{children}</div>
        </main>
      </div>
    </NavContext.Provider>
  );
};

export default DashboardLayout;
