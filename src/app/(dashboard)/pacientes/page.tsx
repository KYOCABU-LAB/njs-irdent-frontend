"use client";

import { motion } from "framer-motion";
import {
  PlusCircle,
  Search,
  Filter,
  Eye,
  MoreHorizontal,
  Calendar,
  FileText,
  Shield,
  User,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/shared/components/ui/Button";

const pacientes = [
  {
    id: "1",
    name: "prueba test1",
    dni: "12345678A",
    phone: "+34 612 345 678",
    email: "prueba@email.com",
    lastVisit: "15 Oct 2023",
    status: "Activo",
  },
  {
    id: "2",
    name: "prueba test1",
    dni: "87654321B",
    phone: "+34 623 456 789",
    email: "prueba@email.com",
    lastVisit: "12 Oct 2023",
    status: "Activo",
  },
  {
    id: "3",
    name: "prueba test1",
    dni: "11223344C",
    phone: "+34 634 567 890",
    email: " prueba@email.com",
    lastVisit: "10 Oct 2023",
    status: "Inactivo",
  },
];

const StatusBadge = ({ status }: { status: "Activo" | "Inactivo" }) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        status === "Activo"
          ? "bg-success/10 text-success border border-success/20"
          : "bg-muted text-muted-foreground border border-border"
      }`}
    >
      {status}
    </span>
  );
};

const PacientesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Pacientes
              </h1>
              <p className="text-muted-foreground">
                Gestiona el historial médico y tratamientos de tus pacientes
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Link href="/pacientes/crear">
                <Button size="lg" className="gap-2">
                  <PlusCircle className="h-5 w-5" />
                  Nuevo Paciente
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-muted rounded-2xl border border-border p-6 mb-6 backdrop-blur-sm"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar pacientes por nombre, DNI o email..."
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-xl bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-dental-blue/20 focus:border-dental-blue transition-all"
                />
              </div>
              <Button variant="secondary" className="gap-2">
                <Filter className="h-4 w-4" />
                Filtros
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          >
            {pacientes.map((patient, index) => (
              <motion.div
                key={patient.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={`/pacientes/${patient.id}`} className="block">
                  <div className="bg-background rounded-2xl p-6 border border-border hover:shadow-xl hover:shadow-dental-blue/10 transition-all duration-300 h-full backdrop-blur-sm hover:border-dental-blue/20">
                    {/* Patient Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-12 h-12 bg-dental-light rounded-xl font-semibold text-dental-blue text-lg">
                          {patient.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {patient.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            DNI: {patient.dni}
                          </p>
                        </div>
                      </div>
                      <StatusBadge
                        status={patient.status as "Activo" | "Inactivo"}
                      />
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4 text-dental-blue" />
                        <span>{patient.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4 text-dental-blue" />
                        <span className="truncate">{patient.email}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-dental-blue" />
                        <span>Última visita: {patient.lastVisit}</span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 group-hover:bg-dental-light"
                      >
                        <Eye className="h-4 w-4" />
                        Ver Detalles
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {pacientes.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-dental-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <PlusCircle className="h-8 w-8 text-dental-blue" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No hay pacientes registrados
              </h3>
              <p className="text-muted-foreground mb-6">
                Comienza agregando tu primer paciente al sistema
              </p>
              <Link href="/pacientes/crear">
                <Button size="lg" className="gap-2">
                  <PlusCircle className="h-5 w-5" />
                  Crear Primer Paciente
                </Button>
              </Link>
            </motion.div>
          )}

          {/* Stats Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-background rounded-2xl p-6 border border-border backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium">
                    Total Pacientes
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {pacientes.length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-dental-light rounded-xl flex items-center justify-center">
                  <User className="h-6 w-6 text-dental-blue" />
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 border border-border backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium">
                    Pacientes Activos
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {pacientes.filter((p) => p.status === "Activo").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-success" />
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 border border-border backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium">
                    Visitas Este Mes
                  </p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
                <div className="w-12 h-12 bg-dental-mint/10 rounded-xl flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-dental-mint" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default PacientesPage;
