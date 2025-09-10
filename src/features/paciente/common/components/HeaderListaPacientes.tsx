"use client";

import { motion } from "framer-motion";
import { Bell, Search, Settings } from "lucide-react";

export function HeaderListaPacientes() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white/80 backdrop-blur-xl w-full py-6 px-8 flex justify-between items-center border-b border-border/50 sticky top-0 z-50"
    >
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <h1 className="text-lg font-semibold text-foreground">IrDent</h1>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-all duration-200"
        >
          <Bell className="h-5 w-5" />
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full"
          />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-all duration-200"
        >
          <Settings className="h-5 w-5" />
        </motion.button>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center h-10 w-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl font-semibold text-primary-foreground text-sm cursor-pointer"
        >
          RR
        </motion.div>
      </div>
    </motion.header>
  );
}
