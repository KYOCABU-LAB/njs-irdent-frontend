"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Stethoscope } from "lucide-react";

export default function RootPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (session) {
      router.replace("/dashboard");
    } else {
      router.replace("/auth/signin");
    }
  }, [session, status, router]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-2xl mb-6 animate-pulse">
          <Stethoscope className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Cargando IrDent...
        </h2>
        <p className="text-gray-600">Verificando tu sesión</p>
      </div>
    </div>
  );
}
