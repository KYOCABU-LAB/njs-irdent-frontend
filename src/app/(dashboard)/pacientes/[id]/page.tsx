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
  ChevronLeft,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/shared/components/ui/Button";
import { useParams } from "next/navigation";
import Link from "next/link";

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

  const idUser = useParams().id;

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    console.log("ID del usuario:", idUser);
  }, [idUser]);

  return (
    <div className="space-y-8">
      {/*  Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link href="/pacientes">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-lg hover:bg-dental-light"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Volver a Pacientes</span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Datos Generales
          </h1>
          <p className="text-muted-foreground">
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
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-gradient-to-br from-primary to-dental-gray rounded-2xl p-8 text-primary-foreground shadow-lg"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Información Personal</h2>
            <p className="text-primary-foreground/80">
              Datos básicos del paciente
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <User className="h-5 w-5 text-primary-foreground/70" />
              <div>
                <p className="text-sm text-primary-foreground/70">
                  Nombre Completo
                </p>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) =>
                      handleInputChange("nombre", e.target.value)
                    }
                    className="mt-1 w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-dental-mint/50"
                  />
                ) : (
                  <p className="text-primary-foreground font-medium">
                    {formData.nombre}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-primary-foreground/70" />
              <div>
                <p className="text-sm text-primary-foreground/70">DNI</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.dni}
                    onChange={(e) => handleInputChange("dni", e.target.value)}
                    className="mt-1 w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-dental-mint/50"
                  />
                ) : (
                  <p className="text-primary-foreground font-medium">
                    {formData.dni}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-primary-foreground/70" />
              <div>
                <p className="text-sm text-primary-foreground/70">
                  Fecha de Nacimiento
                </p>
                {isEditing ? (
                  <input
                    type="date"
                    value={formData.fechaNacimiento}
                    onChange={(e) =>
                      handleInputChange("fechaNacimiento", e.target.value)
                    }
                    className="mt-1 w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-dental-mint/50"
                  />
                ) : (
                  <p className="text-primary-foreground font-medium">
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
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-gradient-to-br from-dental-blue to-secondary rounded-2xl p-8 text-secondary-foreground shadow-lg"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Información de Contacto</h2>
            <p className="text-secondary-foreground/80">
              Datos de comunicación
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-secondary-foreground/70" />
              <div>
                <p className="text-sm text-secondary-foreground/70">Teléfono</p>
                {isEditing ? (
                  <input
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) =>
                      handleInputChange("telefono", e.target.value)
                    }
                    className="mt-1 w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:ring-2 focus:ring-dental-mint/50"
                  />
                ) : (
                  <p className="text-secondary-foreground font-medium">
                    {formData.telefono}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-secondary-foreground/70" />
              <div>
                <p className="text-sm text-secondary-foreground/70">Email</p>
                {isEditing ? (
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-1 w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:ring-2 focus:ring-dental-mint/50"
                  />
                ) : (
                  <p className="text-secondary-foreground font-medium">
                    {formData.email}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-secondary-foreground/70" />
              <div>
                <p className="text-sm text-secondary-foreground/70">
                  Dirección
                </p>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.direccion}
                    onChange={(e) =>
                      handleInputChange("direccion", e.target.value)
                    }
                    className="mt-1 w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:ring-2 focus:ring-dental-mint/50"
                  />
                ) : (
                  <p className="text-secondary-foreground font-medium">
                    {formData.direccion}
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="bg-gradient-to-r from-dental-mint to-accent rounded-2xl p-8 text-accent-foreground shadow-lg"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Información Médica</h2>
            <p className="text-accent-foreground/80">
              Alergias, medicamentos y observaciones importantes
            </p>
          </div>
          <Heart className="h-8 w-8 text-accent-foreground/70" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-accent-foreground/70 mb-2">
              Alergias
            </label>
            {isEditing ? (
              <textarea
                value={formData.alergias}
                onChange={(e) => handleInputChange("alergias", e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-accent-foreground placeholder:text-accent-foreground/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            ) : (
              <p className="text-accent-foreground font-medium">
                {formData.alergias}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-accent-foreground/70 mb-2">
              Medicamentos
            </label>
            {isEditing ? (
              <textarea
                value={formData.medicamentos}
                onChange={(e) =>
                  handleInputChange("medicamentos", e.target.value)
                }
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-accent-foreground placeholder:text-accent-foreground/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            ) : (
              <p className="text-accent-foreground font-medium">
                {formData.medicamentos}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-accent-foreground/70 mb-2">
              Observaciones
            </label>
            {isEditing ? (
              <textarea
                value={formData.observaciones}
                onChange={(e) =>
                  handleInputChange("observaciones", e.target.value)
                }
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-accent-foreground placeholder:text-accent-foreground/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            ) : (
              <p className="text-accent-foreground font-medium">
                {formData.observaciones}
              </p>
            )}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg hover:shadow-dental-blue/10 transition-all duration-300 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-medium">
                Última Visita
              </p>
              <p className="text-2xl font-bold text-foreground">15 Oct 2023</p>
            </div>
            <div className="w-12 h-12 bg-dental-light rounded-xl flex items-center justify-center">
              <Calendar className="h-6 w-6 text-dental-blue" />
            </div>
          </div>
        </div>

        <div className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg hover:shadow-dental-mint/10 transition-all duration-300 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-medium">
                Tratamientos
              </p>
              <p className="text-2xl font-bold text-foreground">3</p>
            </div>
            <div className="w-12 h-12 bg-dental-mint/10 rounded-xl flex items-center justify-center">
              <FileText className="h-6 w-6 text-dental-mint" />
            </div>
          </div>
        </div>

        <div className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg hover:shadow-success/10 transition-all duration-300 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-medium">
                Estado
              </p>
              <p className="text-2xl font-bold text-foreground">Activo</p>
            </div>
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
              <Shield className="h-6 w-6 text-success" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DatosGeneralesPage;
