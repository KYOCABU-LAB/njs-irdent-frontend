import React from "react";

const DatosIdentificacionPage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">
          Datos de Identificación
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* FOTO */}
          <div className="md:col-span-3 flex flex-col items-center">
            <div className="w-28 h-36 border border-gray-300 rounded-md flex items-center justify-center text-gray-400">
              Foto
            </div>
            <button className="text-blue-500 text-sm mt-2">Cambiar foto</button>
            <p className="text-xs text-gray-500 mt-1 text-center md:text-left">
              Última actualización <br /> 3/9/2025
            </p>
          </div>

          {/* CAMPOS DE FORMULARIO */}
          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Nombre */}
            <div>
              <label className="block text-sm text-gray-600">Nombre *</label>
              <input
                type="text"
                placeholder="Ingrese el nombre"
                className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Apellido Paterno */}
            <div>
              <label className="block text-sm text-gray-600">
                Apellido Paterno *
              </label>
              <input
                type="text"
                placeholder="Ingrese apellido paterno"
                className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Apellido Materno */}
            <div>
              <label className="block text-sm text-gray-600">
                Apellido Materno
              </label>
              <input
                type="text"
                placeholder="Ingrese apellido materno"
                className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Género */}
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="text"
                placeholder="Ingrese el email"
                className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Telefono */}
            <div>
              <label className="block text-sm text-gray-600">
                Teléfono *
              </label>
              <input
                type="number"
                placeholder="Ingrese el numero teléfonico"
                className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Fecha Nacimiento */}
            <div>
              <label className="block text-sm text-gray-600">
                Fecha Nacimiento *
              </label>
              <input
                type="date"
                className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Tipo Identificación */}
            <div>
              <label className="block text-sm text-gray-600">
                Tipo Identificación
              </label>
              <select className="w-full border rounded-md px-3 py-2 mt-1 text-sm bg-gray-100 text-gray-700 focus:outline-none focus:ring focus:ring-blue-200">
                <option value="">Seleccione tipo</option>
                <option value="dni">DNI</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="carnet">Carnet Extranjería</option>
              </select>
            </div>

            {/* Documento */}
            <div>
              <label className="block text-sm text-gray-600">Documento *</label>
              <input
                type="text"
                placeholder="Número de documento"
                className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Estatus */}
            <div>
              <label className="block text-sm text-gray-600">Estatus</label>
              <select className="w-full border rounded-md px-3 py-2 mt-1 text-sm bg-gray-100 text-gray-700 focus:outline-none focus:ring focus:ring-blue-200">
                <option value="">Seleccione estatus</option>
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
                <option value="suspendido">Suspendido</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
    {/* USUARIO */}
      <div className="bg-white shadow rounded-2xl p-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">
          Usuario
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
            {/* Tipo Identificación */}
            <div>
              <label className="block text-sm text-gray-600">
                Usuario*
              </label>
              <input
                type="text"
                placeholder="Número de documento"
                className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Documento */}
            <div>
              <label className="block text-sm text-gray-600">Contraseña *</label>
              <input
                type="text"
                placeholder="Número de documento"
                className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

          </div>
        </div>
      </div>

    
  );
};

export default DatosIdentificacionPage;
