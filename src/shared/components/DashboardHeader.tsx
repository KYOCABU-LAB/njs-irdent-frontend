"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bell, Settings, User, LogOut, ChevronDown, Menu } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useState, useRef } from "react";
import { useNavContext } from "@/shared/context/useNavContext";
import useClickOutside from "../hooks/useClickOutside";

const UserDropdown = () => {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false), isOpen);

  if (status === "loading") {
    return (
      <div className="flex items-center space-x-3">
        <div className="h-10 w-10 bg-gray-200 rounded-xl animate-pulse"></div>
        <div className="hidden md:block">
          <div className="h-4 bg-gray-200 rounded animate-pulse mb-1 w-20"></div>
          <div className="h-3 bg-gray-200 rounded animate-pulse w-16"></div>
        </div>
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center h-10 w-10 bg-gray-200 rounded-xl">
          <User className="h-5 w-5 text-gray-400" />
        </div>
        <div className="hidden md:block">
          <p className="text-sm font-semibold text-gray-400">Sin sesión</p>
          <p className="text-xs text-gray-400">No autenticado</p>
        </div>
      </div>
    );
  }

  const user = session.user;
  const displayName = user.name || user.email || "Usuario";
  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const primaryRole =
    user.roles && user.roles.length > 0
      ? user.roles[0].charAt(0).toUpperCase() + user.roles[0].slice(1)
      : "Usuario";

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center justify-center h-10 w-10 bg-black rounded-xl font-semibold text-white text-sm">
          {initials}
        </div>
        <div className="hidden md:block text-left">
          <p
            className="text-sm font-semibold text-black truncate max-w-32"
            title={displayName}
          >
            {displayName}
          </p>
          <p className="text-xs text-gray-600">{primaryRole}</p>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-gray-600 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50"
          >
            {/* Información del usuario */}
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center h-12 w-12 bg-black rounded-xl font-semibold text-white">
                  {initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-semibold text-black truncate"
                    title={displayName}
                  >
                    {displayName}
                  </p>
                  <p className="text-xs text-gray-600" title={user.email}>
                    {user.email}
                  </p>
                  <p className="text-xs text-gray-500">{primaryRole}</p>
                </div>
              </div>
            </div>

            {/* Opciones del menú */}
            <div className="py-2">
              <motion.button
                whileHover={{ backgroundColor: "#f9fafb" }}
                className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:text-black transition-colors"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <User className="h-4 w-4" />
                <span>Mi Perfil</span>
              </motion.button>

              <motion.button
                whileHover={{ backgroundColor: "#f9fafb" }}
                className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:text-black transition-colors"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <Settings className="h-4 w-4" />
                <span>Configuración</span>
              </motion.button>

              <div className="border-t border-gray-100 mt-2 pt-2">
                <motion.button
                  whileHover={{ backgroundColor: "#fef2f2" }}
                  className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:text-red-600 transition-colors"
                  onClick={() => {
                    setIsOpen(false);
                    signOut({ callbackUrl: "/auth/signin" });
                  }}
                >
                  <LogOut className="h-4 w-4" />
                  <span>Cerrar Sesión</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function DashboardHeader() {
  const { toggleNav } = useNavContext();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white w-full py-4 px-6 flex justify-between items-center border-b border-gray-200 sticky top-0 z-40"
    >
      <div className="flex items-center space-x-4">
        {/* Botón de menú móvil */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleNav}
          className="lg:hidden p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-xl transition-all duration-200"
        >
          <Menu className="h-5 w-5" />
        </motion.button>

        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <h1 className="text-lg font-semibold text-black">IrDent</h1>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-xl transition-all duration-200"
        >
          <Bell className="h-5 w-5" />
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="absolute top-1 right-1 h-2 w-2 bg-black rounded-full"
          />
        </motion.button>

        <UserDropdown />
      </div>
    </motion.header>
  );
}
