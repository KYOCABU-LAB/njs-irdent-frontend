"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  UserCog,
  Stethoscope,
  ChevronRight,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Pacientes", href: "/pacientes", icon: Users },
  { name: "Usuarios", href: "/users", icon: UserCog },
];

const SideBar = () => {
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-screen w-72 flex flex-col bg-white border-r border-gray-200"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="flex items-center space-x-3 p-8 border-b border-gray-200"
      >
        <div className="flex items-center justify-center w-10 h-10 bg-black rounded-xl">
          <Stethoscope className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-primary tracking-tight">
            IrDent
          </h1>
          <p className="text-xs text-gray-600 font-medium">Sistema Dental</p>
        </div>
      </motion.div>

      <nav className="flex-1 px-6 py-8">
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="space-y-2"
        >
          {navItems.map((item, index) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <Link href={item.href} className="block">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-black text-white"
                        : "text-gray-600 hover:text-black hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon
                        className={`h-5 w-5 transition-colors ${
                          isActive
                            ? "text-white"
                            : "text-gray-600 group-hover:text-black"
                        }`}
                      />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="h-4 w-4 text-white" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="p-6 border-t border-gray-200"
      >
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
          <div className="flex items-center justify-center w-10 h-10 bg-black rounded-xl font-semibold text-white text-sm">
            RR
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-black truncate">Russel</p>
            <p className="text-xs text-gray-600">Administrador</p>
          </div>
          <motion.div
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Settings className="h-4 w-4 text-gray-600" />
          </motion.div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-3 flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut className="h-4 w-4" />
          <span>Cerrar Sesión</span>
        </motion.button>
      </motion.div>
    </motion.aside>
  );
};

export default SideBar;
