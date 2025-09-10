"use client";

import {
  Activity,
  Clipboard,
  FileText,
  Smile,
  User,
  CircleDollarSign,
} from "lucide-react";
import { motion } from "framer-motion";
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
      name: "Registro Clinico",
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
    <div className="bg-stone-50 w-full border-b border-stone-200">
      <div className="flex items-center space-x-8 px-8">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`relative flex items-center space-x-2 py-4 text-sm font-medium transition-colors duration-200 ${
              pathname === tab.href
                ? "text-teal-600"
                : "text-stone-500 hover:text-stone-800"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.name}</span>
            {pathname === tab.href && (
              <motion.div
                layoutId="active-underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
