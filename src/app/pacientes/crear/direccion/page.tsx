"use client";
import React, { useState } from "react";

const DireccionPage = () => {
  const [usarMisma, setUsarMisma] = useState(false);

  return (
    <div className="bg-white shadow rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-6">Información de Dirección</h2>

      {/* Direccion */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">País *</label>
          <select className="w-full border rounded-lg p-2">
            <option>Seleccione país</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Departamento/Estado *</label>
          <select className="w-full border rounded-lg p-2">
            <option>Seleccione departamento</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Ciudad *</label>
          <select className="w-full border rounded-lg p-2">
            <option>Seleccione ciudad</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Código Postal</label>
          <input type="text" className="w-full border rounded-lg p-2" placeholder="Código postal" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Dirección Principal *</label>
          <input type="text" className="w-full border rounded-lg p-2" placeholder="Calle, carrera, avenida" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Número *</label>
          <input type="text" className="w-full border rounded-lg p-2" placeholder="Número de la dirección" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Apartamento/Suite</label>
          <input type="text" className="w-full border rounded-lg p-2" placeholder="Apartamento, suite, unidad" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Barrio/Sector</label>
          <input type="text" className="w-full border rounded-lg p-2" placeholder="Nombre del barrio o sector" />
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">Referencias Adicionales</label>
        <textarea className="w-full border rounded-lg p-2" ></textarea>
      </div>

      {/* Dirección de Correspondencia */}
      <div className="mt-6 border rounded-lg p-4 bg-gray-50">
        <h3 className="text-md font-semibold mb-3">Dirección de Correspondencia</h3>

        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={usarMisma}
            onChange={() => setUsarMisma(!usarMisma)}
          />
          <label className="text-sm">Usar la misma dirección para correspondencia</label>
        </div>

        {!usarMisma && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Dirección de Correspondencia</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2"
                placeholder="Dirección para envío de correspondencia"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Ciudad de Correspondencia</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2"
                placeholder="Ciudad para correspondencia"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DireccionPage;
