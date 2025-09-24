"use client";
import { useState } from "react";
import { Eye, Edit, Trash2, PlusCircle, Search, Filter } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/shared/components/ui/Button";

type Doctor = {
  id: number;
  nombre: string;
  documento: string;
  especialidad: string;
  contacto: string;
  telefono: string;
  estado: "ACTIVO" | "INACTIVO";
};

const initialDoctores: Doctor[] = [
  {
    id: 1,
    nombre: "María González Ruiz",
    documento: "12345678",
    especialidad: "Ortodoncista",
    contacto: "maria.gonzalez@irdent.com",
    telefono: "+51 987 654 321",
    estado: "ACTIVO",
  },
  {
    id: 2,
    nombre: "Carlos Rodríguez López",
    documento: "87654321",
    especialidad: "Endodoncista",
    contacto: "carlos.rodriguez@irdent.com",
    telefono: "+51 987 654 322",
    estado: "ACTIVO",
  },
  {
    id: 3,
    nombre: "Ana Martínez Silva",
    documento: "11223344",
    especialidad: "Cirugía Oral",
    contacto: "ana.martinez@irdent.com",
    telefono: "+51 987 654 323",
    estado: "INACTIVO",
  },
  {
    id: 4,
    nombre: "Luis Fernández Torres",
    documento: "55667788",
    especialidad: "Periodoncista",
    contacto: "luis.fernandez@irdent.com",
    telefono: "+51 987 654 324",
    estado: "ACTIVO",
  },
];
export default function DoctoresPage() {
  const [doctores] = useState(initialDoctores);

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Doctores
              </h1>
              <p className="text-muted-foreground">
                Administra la información, especialidades y disponibilidad de tus doctores
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Link href="/admin/doctors/crear">
                <Button size="lg" className="gap-2">
                  <PlusCircle className="h-5 w-5" />
                  Nuevo Doctor
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
      <div className="overflow-x-auto rounded-lg shadow border">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Doctor</th>
              <th className="px-4 py-3">Documento</th>
              <th className="px-4 py-3">Especialidad</th>
              <th className="px-4 py-3">Contacto</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {doctores.map((doctor) => (
              <tr key={doctor.id} className="hover:bg-gray-50">
                {/* Doctor con avatar iniciales */}
                <td className="px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                    {doctor.nombre
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <span>{doctor.nombre}</span>
                </td>

                {/* Documento */}
                <td className="px-4 py-3">
                  <div>{doctor.documento}</div>
                  <div className="text-xs text-gray-500">DNI</div>
                </td>

                {/* Especialidad */}
                <td className="px-4 py-3">
                  <span className="px-2 py-1 border border-gray-300 rounded-lg text-xs text-[#1E40AF] 
                  font-medium bg-gradient-to-r from-[#EBF8FF] to-[#DBEAFE]">
                    {doctor.especialidad}
                  </span>
                </td>

                {/* Contacto */}
                <td className="px-4 py-3">
                  <div>{doctor.contacto}</div>
                  <div className="text-xs text-gray-500">{doctor.telefono}</div>
                </td>

                {/* Estado */}
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      doctor.estado === "ACTIVO"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {doctor.estado}
                  </span>
                </td>

                {/* Acciones */}
                <td className="px-4 py-3 flex gap-3">
                  <button className="text-gray-500 hover:text-blue-600">
                    <Eye size={18} />
                  </button>
                  <button className="text-gray-500 hover:text-yellow-600">
                    <Edit size={18} />
                  </button>
                  <button className="text-gray-500 hover:text-red-600">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}