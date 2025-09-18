import React from "react";

const InformacionContacto = () => {
  return (
    <div className="bg-white shadow rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-6">Información de Contacto</h2>

      {/* Formulario principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Tel Casa */}
        <div>
          <label className="block text-sm font-medium mb-1">Tel. Casa *</label>
          <input
            type="text"
            placeholder="Teléfono de casa"
            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Celular */}
        <div>
          <label className="block text-sm font-medium mb-1">Celular *</label>
          <input
            type="text"
            placeholder="Número de celular"
            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email *</label>
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Tel Oficina */}
        <div>
          <label className="block text-sm font-medium mb-1">Tel. Oficina</label>
          <input
            type="text"
            placeholder="Teléfono de oficina"
            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
          />
        </div>
      </div>

      {/* Otro */}
      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">Otro</label>
        <input
          type="text"
          placeholder="Otro contacto"
          className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Contacto emergencia */}
      <div className="mt-6 bg-gray-50 border rounded-xl p-4">
        <h3 className="text-md font-semibold mb-3">Contacto de Emergencia</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {/* Nombre completo */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Nombre Completo
            </label>
            <input
              type="text"
              placeholder="Nombre del contacto de emergencia"
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Relación */}
          <div>
            <label className="block text-sm font-medium mb-1">Relación</label>
            <select className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300">
              <option>Seleccione relación</option>
              <option>Padre</option>
              <option>Madre</option>
              <option>Hermano/a</option>
              <option>Amigo/a</option>
              <option>Otro</option>
            </select>
          </div>
          {/* #Telefono */}
          <div>
            <label className="block text-sm font-medium mb-1">
               Teléfono
            </label>
            <input
              type="text"
              placeholder="Nombre del contacto de emergencia"
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformacionContacto;
