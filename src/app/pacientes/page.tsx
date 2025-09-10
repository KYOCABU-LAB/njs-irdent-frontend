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
import { HeaderListaPacientes } from "@/features/paciente/common/components/HeaderListaPacientes";

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
          ? "bg-green-100 text-green-800"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      {status}
    </span>
  );
};

const PacientesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeaderListaPacientes />

      <main className="p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-black mb-2">Pacientes</h1>
              <p className="text-gray-600">
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
            className="bg-gray-50 rounded-2xl border border-gray-200 p-6 mb-6"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Buscar pacientes por nombre, DNI o email..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all"
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
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                    {/* Patient Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl font-semibold text-gray-700 text-lg">
                          {patient.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            {patient.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            DNI: {patient.dni}
                          </p>
                        </div>
                      </div>
                      <StatusBadge
                        status={patient.status as "Activo" | "Inactivo"}
                      />
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span>{patient.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Mail className="h-4 w-4" />
                        <span className="truncate">{patient.email}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>Última visita: {patient.lastVisit}</span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 group-hover:bg-gray-100"
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
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <PlusCircle className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                No hay pacientes registrados
              </h3>
              <p className="text-gray-600 mb-6">
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
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">
                    Total Pacientes
                  </p>
                  <p className="text-2xl font-bold text-black">
                    {pacientes.length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">
                    Pacientes Activos
                  </p>
                  <p className="text-2xl font-bold text-black">
                    {pacientes.filter((p) => p.status === "Activo").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">
                    Visitas Este Mes
                  </p>
                  <p className="text-2xl font-bold text-black">12</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-purple-600" />
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
