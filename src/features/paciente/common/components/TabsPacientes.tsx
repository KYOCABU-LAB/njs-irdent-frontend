"use client";

import {
  Activity,
  Clipboard,
  FileText,
  Smile,
  User,
  CircleDollarSign,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function TabsPacientes({ pacienteId }: { pacienteId: string }) {
  const pathname = usePathname();

  const tabs = [
    {
      name: "Datos Generales",
      href: `/pacientes/${pacienteId}`,
      icon: User,
    },
    {
      name: "Registro Clínico",
      href: `/pacientes/${pacienteId}/registro-clinico`,
      icon: Clipboard,
    },
    {
      name: "Odontograma",
      href: `/pacientes/${pacienteId}/odontograma`,
      icon: Smile,
    },
    {
      name: "Periodontograma",
      href: `/pacientes/${pacienteId}/periodontograma`,
      icon: Activity,
    },
    {
      name: "Plan de Tratamiento",
      href: `/pacientes/${pacienteId}/plan-tratamiento`,
      icon: FileText,
    },
    {
      name: "Presupuesto",
      href: `/pacientes/${pacienteId}/presupuesto`,
      icon: CircleDollarSign,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-40"
    >
      <div className="px-8">
        <div className="flex items-center space-x-8 overflow-x-auto">
          {tabs.map((tab, index) => {
            const isActive = pathname === tab.href;

            return (
              <motion.div
                key={tab.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <Link href={tab.href} className="block">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative flex items-center space-x-2 py-4 px-1 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <tab.icon
                      className={`w-4 h-4 transition-colors ${
                        isActive ? "text-dental-blue" : "text-muted-foreground"
                      }`}
                    />
                    <span className="whitespace-nowrap">{tab.name}</span>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          layoutId="active-tab-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-dental-blue rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
