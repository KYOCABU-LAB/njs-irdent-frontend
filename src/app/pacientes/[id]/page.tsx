"use client";

import { motion } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  Calendar,
  MapPin,
  Edit3,
  Save,
  X,
  Plus,
  FileText,
  Heart,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/shared/components/ui/Button";

const DatosGeneralesPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "María González",
    dni: "12345678A",
    telefono: "+34 612 345 678",
    email: "maria.gonzalez@email.com",
    fechaNacimiento: "1985-03-15",
    direccion: "Calle Mayor 123, Madrid",
    ciudad: "Madrid",
    codigoPostal: "28001",
    alergias: "Penicilina",
    medicamentos: "Ninguno",
    observaciones: "Paciente con buena higiene dental",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-black mb-2">
            Datos Generales
          </h1>
          <p className="text-gray-600">
            Información personal y médica del paciente
          </p>
        </div>

        <div className="flex space-x-3">
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)} className="gap-2">
              <Edit3 className="h-4 w-4" />
              Editar
            </Button>
          ) : (
            <>
              <Button
                variant="secondary"
                onClick={handleCancel}
                className="gap-2"
              >
                <X className="h-4 w-4" />
                Cancelar
              </Button>
              <Button onClick={handleSave} className="gap-2">
                <Save className="h-4 w-4" />
                Guardar
              </Button>
            </>
          )}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl p-8 text-white"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Información Personal</h2>
            <p className="text-slate-200">Datos básicos del paciente</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <User className="h-5 w-5 text-slate-300" />
              <div>
                <p className="text-sm text-slate-300">Nombre Completo</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) =>
                      handleInputChange("nombre", e.target.value)
                    }
                    className="mt-1 w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                ) : (
                  <p className="text-white font-medium">{formData.nombre}</p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-slate-300" />
              <div>
                <p className="text-sm text-slate-300">DNI</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.dni}
                    onChange={(e) => handleInputChange("dni", e.target.value)}
                    className="mt-1 w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                ) : (
                  <p className="text-white font-medium">{formData.dni}</p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-slate-300" />
              <div>
                <p className="text-sm text-slate-300">Fecha de Nacimiento</p>
                {isEditing ? (
                  <input
                    type="date"
                    value={formData.fechaNacimiento}
                    onChange={(e) =>
                      handleInputChange("fechaNacimiento", e.target.value)
                    }
                    className="mt-1 w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                ) : (
                  <p className="text-white font-medium">
                    {formData.fechaNacimiento}
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Información de Contacto</h2>
            <p className="text-blue-200">Datos de comunicación</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-300" />
              <div>
                <p className="text-sm text-blue-300">Teléfono</p>
                {isEditing ? (
                  <input
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) =>
                      handleInputChange("telefono", e.target.value)
                    }
                    className="mt-1 w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                ) : (
                  <p className="text-white font-medium">{formData.telefono}</p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-300" />
              <div>
                <p className="text-sm text-blue-300">Email</p>
                {isEditing ? (
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-1 w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                ) : (
                  <p className="text-white font-medium">{formData.email}</p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-300" />
              <div>
                <p className="text-sm text-blue-300">Dirección</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.direccion}
                    onChange={(e) =>
                      handleInputChange("direccion", e.target.value)
                    }
                    className="mt-1 w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                ) : (
                  <p className="text-white font-medium">{formData.direccion}</p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Información Médica</h2>
            <p className="text-red-200">
              Alergias, medicamentos y observaciones importantes
            </p>
          </div>
          <Heart className="h-8 w-8 text-red-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-red-200 mb-2">
              Alergias
            </label>
            {isEditing ? (
              <textarea
                value={formData.alergias}
                onChange={(e) => handleInputChange("alergias", e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-red-300 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            ) : (
              <p className="text-white font-medium">{formData.alergias}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-red-200 mb-2">
              Medicamentos
            </label>
            {isEditing ? (
              <textarea
                value={formData.medicamentos}
                onChange={(e) =>
                  handleInputChange("medicamentos", e.target.value)
                }
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-red-300 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            ) : (
              <p className="text-white font-medium">{formData.medicamentos}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-red-200 mb-2">
              Observaciones
            </label>
            {isEditing ? (
              <textarea
                value={formData.observaciones}
                onChange={(e) =>
                  handleInputChange("observaciones", e.target.value)
                }
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-red-300 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            ) : (
              <p className="text-white font-medium">{formData.observaciones}</p>
            )}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Última Visita</p>
              <p className="text-2xl font-bold text-black">15 Oct 2023</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Tratamientos</p>
              <p className="text-2xl font-bold text-black">3</p>
            </div>
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <FileText className="h-6 w-6 text-emerald-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Estado</p>
              <p className="text-2xl font-bold text-black">Activo</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DatosGeneralesPage;
