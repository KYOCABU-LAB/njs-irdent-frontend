"use client";

import { motion } from "framer-motion";
import { Bell, ChevronLeft, Settings, MoreHorizontal } from "lucide-react";
import Link from "next/link";

export function HeaderPacientes() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white w-full py-6 px-8 flex justify-between items-center border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="flex-1">
        <Link href="/pacientes">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-black transition-colors px-3 py-2 rounded-lg hover:bg-gray-100"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Volver a Pacientes</span>
          </motion.button>
        </Link>
      </div>

      <div className="flex-1 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex items-center justify-center space-x-3"
        >
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <h1 className="text-lg font-semibold text-black">
            Gestión de Paciente
          </h1>
        </motion.div>
      </div>

      <div className="flex-1 flex justify-end">
        <div className="flex items-center space-x-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all duration-200"
          >
            <Bell className="h-5 w-5" />
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="absolute top-1 right-1 h-2 w-2 bg-black rounded-full"
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-all duration-200"
          >
            <Settings className="h-5 w-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-all duration-200"
          >
            <MoreHorizontal className="h-5 w-5" />
          </motion.button>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center h-10 w-10 bg-black rounded-xl font-semibold text-white text-sm cursor-pointer"
          >
            RR
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
