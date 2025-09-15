"use client";

import { SessionProvider } from "next-auth/react";
import ContextLayout from "@/shared/context/useNavContext";
import React from "react";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <ContextLayout>{children}</ContextLayout>
    </SessionProvider>
  );
}