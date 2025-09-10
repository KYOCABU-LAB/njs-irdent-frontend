"use client";

import { motion } from "framer-motion";
import { HeaderListaPacientes } from "@/features/paciente/common/components/HeaderListaPacientes";
import { Eye, PlusCircle, Search, Filter, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/shared/components/ui/Button";

const pacientes = [
  {
    id: "1",
    name: "prueba",
    dni: "12345678A",
    lastVisit: "2023-10-15",
    status: "Activo",
    phone: "+51 999999999",
    email: "prueba@email.com",
  },
];

const StatusBadge = ({ status }: { status: "Activo" | "Inactivo" }) => {
  const baseClasses = "px-3 py-1 text-xs font-medium rounded-full";
  const statusClasses = {
    Activo: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    Inactivo: "bg-muted text-muted-foreground border border-border",
  };
  return (
    <span
      className={`${baseClasses} ${
        statusClasses[status] || statusClasses.Inactivo
      }`}
    >
      {status}
    </span>
  );
};

const PacientesPage = () => {
  return (
    <div className="min-h-screen bg-background">
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
            className="bg-white rounded-2xl border border-border/50 p-6 mb-6"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar pacientes por nombre, DNI o email..."
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
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
            className="bg-white rounded-2xl border border-border/50 overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-border/50 bg-muted/30">
              <div className="grid grid-cols-12 gap-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <div className="col-span-4">Paciente</div>
                <div className="col-span-2">Contacto</div>
                <div className="col-span-2">Última Visita</div>
                <div className="col-span-2">Estado</div>
                <div className="col-span-2 text-right">Acciones</div>
              </div>
            </div>

            <div className="divide-y divide-border/50">
              {pacientes.map((patient, index) => (
                <motion.div
                  key={patient.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  className="px-6 py-4 hover:bg-muted/30 transition-colors"
                >
                  <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Patient Info */}
                    <div className="col-span-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl font-semibold text-primary-foreground text-sm">
                          {patient.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">
                            {patient.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            DNI: {patient.dni}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2">
                      <div className="text-sm text-foreground">
                        {patient.phone}
                      </div>
                      <div className="text-xs text-muted-foreground truncate">
                        {patient.email}
                      </div>
                    </div>

                    <div className="col-span-2">
                      <div className="text-sm text-foreground">
                        {patient.lastVisit}
                      </div>
                    </div>

                    <div className="col-span-2">
                      <StatusBadge
                        status={patient.status as "Activo" | "Inactivo"}
                      />
                    </div>

                    <div className="col-span-2 flex justify-end space-x-2">
                      <Link href={`/pacientes/${patient.id}`}>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Eye className="h-4 w-4" />
                          Ver
                        </Button>
                      </Link>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {pacientes.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <PlusCircle className="h-8 w-8 text-muted-foreground" />
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
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default PacientesPage;
