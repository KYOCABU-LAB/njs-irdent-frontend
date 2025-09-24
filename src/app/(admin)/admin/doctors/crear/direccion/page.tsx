"use client";

import { useState } from "react";

export default function FormularioMedico() {
  const [formData, setFormData] = useState({
    direccion: "",
    distrito: "",
    provincia: "",
    departamento: "",
    codigoPostal: "",
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

      {/* INFORMACIÓN DE DIRECCIÓN */}
      <section className=" space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Información de Dirección</h2>
        <div>
          <label className="block text-sm text-gray-500">Dirección Completa</label>
          <input
            type="text"
            name="direccion"
            placeholder="Ingrese la dirección completa (calle, número, referencia)"
            value={formData.direccion}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="distrito"
            placeholder="Ingrese el distrito"
            value={formData.distrito}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
          <input
            type="text"
            name="provincia"
            placeholder="Ingrese la provincia"
            value={formData.provincia}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
          <input
            type="text"
            name="departamento"
            placeholder="Ingrese el departamento"
            value={formData.departamento}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
          <input
            type="text"
            name="codigoPostal"
            placeholder="Ingrese el código postal"
            value={formData.codigoPostal}
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
