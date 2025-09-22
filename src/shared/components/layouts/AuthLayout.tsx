"use client";

import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="min-h-screen bg-muted">{children}</div>;
};

export default AuthLayout;
