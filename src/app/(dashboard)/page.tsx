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
    color: "text-primary",
    bgColor: "bg-background",
    borderColor: "border-border",
  },
  {
    title: "Nuevo Paciente",
    description:
      "Registra nuevos pacientes con información completa y organizada",
    icon: UserPlus,
    href: "/pacientes/crear",
    color: "text-dental-blue",
    bgColor: "bg-background",
    borderColor: "border-border",
  },
  {
    title: "Registro Clínico",
    description: "Documenta consultas y tratamientos con precisión médica",
    icon: Clipboard,
    href: "/registro-clinico",
    color: "text-primary",
    bgColor: "bg-background",
    borderColor: "border-border",
  },
  {
    title: "Odontograma",
    description: "Visualiza y registra el estado dental de tus pacientes",
    icon: Smile,
    href: "/odontograma",
    color: "text-dental-mint",
    bgColor: "bg-background",
    borderColor: "border-border",
  },
  {
    title: "Plan de Tratamiento",
    description: "Crea planes de tratamiento personalizados y seguimiento",
    icon: FileText,
    href: "/plan-tratamiento",
    color: "text-primary",
    bgColor: "bg-background",
    borderColor: "border-border",
  },
  {
    title: "Presupuestos",
    description: "Genera presupuestos detallados para tratamientos",
    icon: CircleDollarSign,
    href: "/presupuestos",
    color: "text-dental-blue",
    bgColor: "bg-background",
    borderColor: "border-border",
  },
];

const stats = [
  { label: "Pacientes Activos", value: "1,247", icon: Users },
  { label: "Citas Hoy", value: "23", icon: Calendar },
  { label: "Tratamientos", value: "156", icon: Stethoscope },
  { label: "Satisfacción", value: "98%", icon: Heart },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
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
              className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6 shadow-lg"
            >
              <Stethoscope className="h-8 w-8 text-primary-foreground" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl font-bold text-foreground mb-6 tracking-tight"
            >
              Gestión dental{" "}
              <span className="text-dental-mint">personalizada</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Sistema de gestión dental moderno con tecnología de vanguardia.
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
                className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg hover:shadow-dental-blue/10 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <stat.icon className="h-6 w-6 text-dental-blue" />
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-medium">
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
                    className={`${feature.bgColor} rounded-2xl p-8 border ${feature.borderColor} hover:shadow-xl hover:shadow-dental-blue/10 transition-all duration-300 h-full backdrop-blur-sm hover:border-dental-blue/20`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-dental-light rounded-xl flex items-center justify-center">
                          <feature.icon
                            className={`h-5 w-5 ${feature.color}`}
                          />
                        </div>
                        <div>
                          <h3
                            className={`text-lg font-semibold ${feature.color} group-hover:text-dental-mint transition-colors`}
                          >
                            {feature.title}
                          </h3>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-dental-mint transition-colors" />
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
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
            <div className="bg-muted rounded-3xl p-8 border border-border backdrop-blur-sm">
              <Shield className="h-12 w-12 text-dental-blue mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Seguridad y Privacidad Garantizadas
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
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
