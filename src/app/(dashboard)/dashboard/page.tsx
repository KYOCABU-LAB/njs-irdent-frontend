"use client";

import { motion } from "framer-motion";
import {
  Users,
  UserPlus,
  Calendar,
  BarChart3,
  ArrowRight,
  Stethoscope,
  Heart,
  Shield,
  Clipboard,
  Smile,
  Activity,
  FileText,
  CircleDollarSign,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Gestión de Pacientes",
    description:
      "Administra el historial médico y tratamientos de tus pacientes de forma eficiente",
    icon: Users,
    href: "/pacientes",
    color: "text-black",
    bgColor: "bg-white",
    borderColor: "border-gray-200",
  },
  {
    title: "Nuevo Paciente",
    description:
      "Registra nuevos pacientes con información completa y organizada",
    icon: UserPlus,
    href: "/pacientes/crear",
    color: "text-orange-600",
    bgColor: "bg-white",
    borderColor: "border-gray-200",
  },
  {
    title: "Registro Clínico",
    description: "Documenta consultas y tratamientos con precisión médica",
    icon: Clipboard,
    href: "/registro-clinico",
    color: "text-black",
    bgColor: "bg-white",
    borderColor: "border-gray-200",
  },
  {
    title: "Odontograma",
    description: "Visualiza y registra el estado dental de tus pacientes",
    icon: Smile,
    href: "/odontograma",
    color: "text-black",
    bgColor: "bg-white",
    borderColor: "border-gray-200",
  },
  {
    title: "Plan de Tratamiento",
    description: "Crea planes de tratamiento personalizados y seguimiento",
    icon: FileText,
    href: "/plan-tratamiento",
    color: "text-black",
    bgColor: "bg-white",
    borderColor: "border-gray-200",
  },
  {
    title: "Presupuestos",
    description: "Genera presupuestos detallados para tratamientos",
    icon: CircleDollarSign,
    href: "/presupuestos",
    color: "text-black",
    bgColor: "bg-white",
    borderColor: "border-gray-200",
  },
];

const stats = [
  { label: "Pacientes Activos", value: "1,247", icon: Users },
  { label: "Citas Hoy", value: "23", icon: Calendar },
  { label: "Tratamientos", value: "156", icon: Stethoscope },
  { label: "Satisfacción", value: "98%", icon: Heart },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-8 py-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-2xl mb-6"
            >
              <Stethoscope className="h-8 w-8 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl font-bold text-black mb-6 tracking-tight"
            >
              Gestión dental{" "}
              <span className="text-orange-600">personalizada</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Sistema de gestión dental moderno.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <stat.icon className="h-6 w-6 text-gray-600" />
                  <div className="text-2xl font-bold text-black">
                    {stat.value}
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={feature.href} className="block">
                  <div
                    className={`${feature.bgColor} rounded-2xl p-8 border ${feature.borderColor} hover:shadow-xl transition-all duration-300 h-full`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                          <feature.icon className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <h3
                            className={`text-lg font-semibold ${feature.color} group-hover:text-orange-600 transition-colors`}
                          >
                            {feature.title}
                          </h3>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <Shield className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-black mb-3">
                Seguridad y Privacidad Garantizadas
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tu información y la de tus pacientes están protegidas con los
                más altos estándares de seguridad y cumplimiento de normativas
                médicas.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
