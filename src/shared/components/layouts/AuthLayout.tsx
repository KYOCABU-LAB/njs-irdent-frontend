"use client";

import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="min-h-screen bg-gray-50">{children}</div>;
};

export default AuthLayout;
