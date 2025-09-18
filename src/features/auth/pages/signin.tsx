"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { parseBackendError } from "@/shared/utils/errorParser";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validateEmail = (email: string) => {
    if (!email) {
      return "El email es requerido";
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return "El formato del email no es válido";
    }
    return null;
  };

  const validatePassword = (password: string) => {
    if (!password) {
      return "La contraseña es requerida";
    }
    if (password.length < 6) {
      return "La contraseña debe tener al menos 6 caracteres";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    setEmailError(emailValidation);
    setPasswordError(passwordValidation);

    if (emailValidation || passwordValidation) {
      setIsLoading(false);
      return;
    }

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError(parseBackendError(result.error));
      } else {
        router.push("/");
      }
    } catch (err) {
      setError("Error inesperado. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dental-light to-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Panel izquierdo - Información */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block space-y-8"
        >
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-dental-blue rounded-2xl">
                <Stethoscope className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-dental-blue tracking-tight">
                  IrDent
                </h1>
                <p className="text-slate-600 font-medium">
                  Sistema de Gestión Dental
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-5xl font-light text-slate-900 leading-tight tracking-tight">
                Diseñado para{" "}
                <span className="font-medium text-dental-blue">
                  profesionales
                </span>
              </h2>
              <p className="text-xl text-slate-500 font-light leading-relaxed">
                Simplicidad. Precisión. Resultados.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Panel derechoo - Formulario */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md mx-auto lg:mx-0"
        >
          <div className="bg-background rounded-3xl shadow-xl border border-border p-8">
            {/* Header móvil */}
            <div className="lg:hidden text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-dental-blue rounded-xl">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-dental-blue">IrDent</h1>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Iniciar Sesión
                </h2>
                <p className="text-slate-600">
                  Ingresa tus credenciales para acceder al sistema
                </p>
              </div>

              {/* Error general */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3"
                >
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-700 text-sm">{error}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Campo Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-900"
                  >
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError(null);
                        setError(null);
                      }}
                      className={`block w-full pl-10 pr-3 py-3 rounded-xl text-foreground placeholder-slate-400 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-dental-blue focus:border-transparent transition-all duration-200 ${
                        emailError
                          ? "border-red-300 bg-red-50"
                          : "hover:border-slate-400"
                      }`}
                      placeholder="tu@email.com"
                    />
                  </div>
                  {emailError && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm flex items-center space-x-1"
                    >
                      <AlertCircle className="h-4 w-4" />
                      <span>{emailError}</span>
                    </motion.p>
                  )}
                </div>

                {/* Campo contraseña */}
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-900"
                  >
                    Contraseña
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError(null);
                        setError(null);
                      }}
                      className={`block w-full pl-10 pr-12 py-3 rounded-xl text-foreground placeholder-slate-400 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-dental-blue focus:border-transparent transition-all duration-200 ${
                        passwordError
                          ? "border-red-300 bg-red-50"
                          : "hover:border-slate-400"
                      }`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                      ) : (
                        <Eye className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                      )}
                    </button>
                  </div>
                  {passwordError && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm flex items-center space-x-1"
                    >
                      <AlertCircle className="h-4 w-4" />
                      <span>{passwordError}</span>
                    </motion.p>
                  )}
                </div>

                {/* Botoon */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-white font-semibold transition-all duration-200 ${
                    isLoading
                      ? "bg-slate-400 cursor-not-allowed"
                      : "bg-dental-blue hover:bg-primary hover:-translate-y-0.5 focus:outline-none focus:ring-1 focus:ring-dental-blue focus:ring-offset-2"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Iniciando sesión...</span>
                    </>
                  ) : (
                    <>
                      <span>Iniciar Sesión</span>
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Credenciales de prueba */}
              <div className="mt-6 p-4 bg-muted rounded-xl border border-border">
                <p className="text-xs text-slate-600 mb-2 font-medium">
                  Credenciales de prueba:
                </p>
                <div className="text-xs text-slate-500 space-y-1">
                  <p>
                    <strong>Email:</strong> admin@gmail.com
                  </p>
                  <p>
                    <strong>Contraseña:</strong> Admin123
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
