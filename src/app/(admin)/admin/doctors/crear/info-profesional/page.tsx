"use client";

import { useState } from "react";

export default function FormularioMedico() {
  const [formData, setFormData] = useState({
    especialidad: "",
    colegiatura: "",
    experiencia: "",
    horario: "",
    observaciones: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6"
    >
      {/* INFORMACIÓN PROFESIONAL */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Información Profesional</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-500">Especialidad *</label>
            <select
              name="especialidad"
              value={formData.especialidad}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            >
              <option value="">Seleccione especialidad</option>
              <option value="Ortodoncia">Ortodoncia</option>
              <option value="Endodoncia">Endodoncia</option>
              <option value="Cirugía Oral">Cirugía Oral</option>
              <option value="dermatPeriodonciaologia">Periodoncia</option>
              <option value="Odontología General">Odontología General</option>
              <option value="Implantología">Implantología</option>
              <option value="Odontopediatría">Odontopediatría</option>
              <option value="Prostodoncia">Prostodoncia</option>
              <option value="Patología Oral">Patología Oral</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-500">Número de Colegiatura</label>
            <input
              type="text"
              name="colegiatura"
              placeholder="Número de colegiatura médica"
              value={formData.colegiatura}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500">Años de Experiencia</label>
            <input
              type="number"
              name="experiencia"
              placeholder="Años de experiencia"
              value={formData.experiencia}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500">Horario de Trabajo</label>
            <select
              name="horario"
              value={formData.horario}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            >
              <option value="">Seleccione horario</option>
              <option value="mañana">Mañana</option>
              <option value="tarde">Tarde</option>
              <option value="noche">Noche</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-500">Observaciones Profesionales</label>
          <textarea
            name="observaciones"
            placeholder="Escriba observaciones..."
            value={formData.observaciones}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>
      </section>

      {/* BOTÓN DE ENVIAR */}
      <div className="text-right">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          Guardar Información
        </button>
      </div>
    </form>
  );
}
