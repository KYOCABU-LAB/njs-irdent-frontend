"use client";

import { SessionProvider } from "next-auth/react";
import ContextLayout from "@/shared/context/useNavContext";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <ContextLayout>{children}</ContextLayout>
      </QueryClientProvider>
    </SessionProvider>
  );
}
