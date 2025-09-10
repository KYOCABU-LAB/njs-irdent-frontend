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
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Gestión de Pacientes",
    description:
      "Administra el historial médico y tratamientos de tus pacientes de forma eficiente",
    icon: Users,
    href: "/pacientes",
    color: "from-blue-500 to-blue-600",
    delay: 0.1,
  },
  {
    title: "Nuevo Paciente",
    description:
      "Registra nuevos pacientes con información completa y organizada",
    icon: UserPlus,
    href: "/pacientes/crear",
    color: "from-emerald-500 to-emerald-600",
    delay: 0.2,
  },
  {
    title: "Citas y Agenda",
    description:
      "Programa y gestiona las citas médicas con recordatorios automáticos",
    icon: Calendar,
    href: "/citas",
    color: "from-purple-500 to-purple-600",
    delay: 0.3,
  },
  {
    title: "Reportes y Análisis",
    description:
      "Visualiza estadísticas y reportes detallados de tu consultorio",
    icon: BarChart3,
    href: "/reportes",
    color: "from-orange-500 to-orange-600",
    delay: 0.4,
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
              className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6"
            >
              <Stethoscope className="h-8 w-8 text-primary-foreground" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl font-bold text-foreground mb-6 tracking-tight"
            >
              Bienvenido a{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                IrDent
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Sistema de gestión dental moderno y eficiente.
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
                className="bg-white rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <stat.icon className="h-6 w-6 text-muted-foreground" />
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
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: feature.delay, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={feature.href} className="block">
                  <div className="bg-white rounded-2xl p-8 border border-border/50 hover:shadow-xl transition-all duration-300 h-full">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                      <span>Acceder</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
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
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-8 border border-primary/20">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
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
