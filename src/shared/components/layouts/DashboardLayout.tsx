"use client";

import React, { useState } from "react";
import { NavContext } from "@/shared/context/useNavContext";
import SideBarDesktop, { SideBarMobile } from "../sidebar/SideBar";

import { DashboardHeader } from "../DashboardHeader";

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
        <main className="flex-1 overflow-auto flex flex-col">
          <DashboardHeader />
          <div className="flex-1 p-6">{children}</div>
        </main>
      </div>
    </NavContext.Provider>
  );
};

export default DashboardLayout;
