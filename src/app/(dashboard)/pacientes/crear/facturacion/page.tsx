"use client";
import React, { useState } from "react";

const FacturacionPage = () => {
  const [tipoFacturacion, setTipoFacturacion] = useState("Persona Natural");
  const [tieneSeguro, setTieneSeguro] = useState(false);
  const [metodosPago, setMetodosPago] = useState({
    efectivo: false,
    tarjeta: false,
    transferencia: false,
  });

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-2 text-gray-700">Información de Facturación</h2>
      <p className="text-sm text-gray-600 mb-6">
        Configure los datos de facturación y métodos de pago del paciente
      </p>

      {/* Tipo de Facturación */}
      <div className="mb-6 border rounded-lg p-4 bg-gray-50">
        <label className="block text-sm font-medium mb-2">Tipo de Facturación</label>
        <div className="flex gap-4">
          <button
            type="button"
            className={`px-4 py-2 rounded-lg border ${
              tipoFacturacion === "Persona Natural"
                ? "bg-black text-white"
                : "bg-gray-100"
            }`}
            onClick={() => setTipoFacturacion("Persona Natural")}
          >
            Persona Natural
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-lg border ${
              tipoFacturacion === "Empresa"
                ? "bg-black text-white"
                : "bg-gray-100"
            }`}
            onClick={() => setTipoFacturacion("Empresa")}
          >
            Empresa
          </button>
        </div>
      </div>

      {/* Nombres y Documentos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Nombres Completos *</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2"
            placeholder="Nombres del responsable de pago"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Apellidos Completos *</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2"
            placeholder="Apellidos del responsable de pago"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Tipo de Documento *</label>
          <select className="w-full border rounded-lg p-2">
            <option>Seleccione tipo de documento</option>
            <option>DNI</option>
            <option>Cédula</option>
            <option>Pasaporte</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Número de Documento *</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2"
            placeholder="Número de documento"
          />
        </div>
      </div>

      {/* Seguro Médico */}
      <div className="mb-6 border rounded-lg p-4 bg-gray-50">
        <label className="block text-sm font-medium mb-2">Seguro Médico</label>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={tieneSeguro}
            onChange={() => setTieneSeguro(!tieneSeguro)}
          />
          <span className="text-sm">El paciente tiene seguro médico</span>
        </div>
      </div>

      {/* Métodos de Pago */}
      <div className="mb-6 border rounded-lg p-4 bg-gray-50">
        <h3 className="text-md font-semibold mb-3">Métodos de Pago Preferidos</h3>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Método de Pago Principal *</label>
          <select className="w-full border rounded-lg p-2">
            <option>Seleccione método de pago</option>
            <option>Efectivo</option>
            <option>Tarjeta</option>
            <option>Transferencia</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-6">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={metodosPago.efectivo}
              onChange={() =>
                setMetodosPago({ ...metodosPago, efectivo: !metodosPago.efectivo })
              }
            />
            Efectivo
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={metodosPago.tarjeta}
              onChange={() =>
                setMetodosPago({ ...metodosPago, tarjeta: !metodosPago.tarjeta })
              }
            />
            Tarjetas
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={metodosPago.transferencia}
              onChange={() =>
                setMetodosPago({
                  ...metodosPago,
                  transferencia: !metodosPago.transferencia,
                })
              }
            />
            Transferencias
          </label>
        </div>
      </div>
    </div>
  );
};

export default FacturacionPage;