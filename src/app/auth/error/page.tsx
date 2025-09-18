"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { AlertCircle, ArrowLeft } from "lucide-react";

const errorMessages: Record<string, string> = {
  Configuration:
    "Error de configuración del servidor. Contacta al administrador.",
  AccessDenied: "Acceso denegado. No tienes permisos para acceder.",
  Verification: "Error de verificación. El enlace puede haber expirado.",
  Default: "Ha ocurrido un error durante la autenticación.",
};

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const errorMessage =
    error && errorMessages[error]
      ? errorMessages[error]
      : errorMessages.Default;

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-center">
          <div className="rounded-full bg-red-100 p-3">
            <AlertCircle className="h-8 w-8 text-red-600" />
          </div>
        </div>

        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Error de Autenticación
        </h2>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-6">{errorMessage}</p>

          {error && (
            <div className="mb-6 p-3 bg-gray-50 rounded-md">
              <p className="text-xs text-gray-500">
                Código de error: <span className="font-mono">{error}</span>
              </p>
            </div>
          )}

          <Link
            href="/auth/signin"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio de sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
