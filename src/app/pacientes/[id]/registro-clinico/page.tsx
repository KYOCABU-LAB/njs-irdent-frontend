"use client";
import { Calendar, User, AlertCircle, Edit, Trash2, Paperclip, Plus } from "lucide-react";

interface RecordProps {
  title: string;
  price: string;
  date: string;
  doctor: string;
  condition: string;
  symptoms: string;
  description: string;
  medication: string;
  recommendations: string;
  nextVisit?: string;
  attachments?: string[];
}

const records: RecordProps[] = [
  {
    title: "Limpieza dental profesional y profilaxis",
    price: "$120",
    date: "15/03/2024",
    doctor: "Dr. Pérez",
    condition: "Gingivitis leve",
    symptoms: "Sangrado leve de encías al cepillado",
    description:
      "Paciente presenta buena higiene oral en general. Se realizó profilaxis completa con ultrasonido. Encías con inflamación leve en sector posterior. Se detectó acumulación de placa en molares superiores. Procedimiento sin complicaciones.",
    medication: "Enjuague bucal con clorhexidina 0.12% por 7 días",
    recommendations:
      "Mejorar técnica de cepillado en molares posteriores. Usar hilo dental diariamente. Control en 6 meses.",
    nextVisit: "15/09/2024",
    attachments: ["radiografia_panoramica.jpg", "fotos_intraorales.jpg"],
  },
  {
    title: "Revisión general y radiografías periapicales",
    price: "$80",
    date: "10/02/2024",
    doctor: "Dr. Rodríguez",
    condition: "Caries dental en molar 16",
    symptoms: "Sensibilidad al frío en zona posterior derecha",
    description:
      "Control rutinario programado. Se detecta caries profunda en molar superior derecho (16). Radiografías periapicales muestran compromiso pulpar. Paciente refiere sensibilidad ocasional al frío. Resto de piezas dentales en buen estado. Se programa endodoncia.",
    medication: "Ibuprofeno 400mg cada 8 horas si hay dolor",
    recommendations:
      "Evitar alimentos muy fríos o calientes. Programar endodoncia urgente.",
  },
];

export default function RegistroClinicoPage() {
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Registros Clínicos</h2>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
          <Plus size={16} />
          Nuevo Registro
        </button>
      </div>

      {/* Records */}
      {records.map((record, index) => (
        <div
          key={index}
          className="bg-white shadow-sm rounded-xl border p-4 space-y-3"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-medium">{record.title}</h3>
              <span className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded-md">
                {record.price}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Edit size={16} className="cursor-pointer hover:text-blue-600" />
              <Trash2 size={16} className="cursor-pointer hover:text-red-600" />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar size={16} /> {record.date}
            </div>
            <div className="flex items-center gap-1">
              <User size={16} /> {record.doctor}
            </div>
            <div className="flex items-center gap-1">
              <AlertCircle size={16} /> {record.condition}
            </div>
          </div>

          {/* Síntomas */}
          <p className="text-sm text-gray-500">
            <span className="font-medium text-gray-700">Síntomas: </span>
            {record.symptoms}
          </p>

          {/* Descripción */}
          <p className="text-sm leading-relaxed">{record.description}</p>

          {/* Medicamentos */}
          <div className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-lg text-sm">
            <span className="font-medium">Medicamentos: </span>
            {record.medication}
          </div>

          {/* Recomendaciones */}
          <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm">
            <span className="font-medium">Recomendaciones: </span>
            {record.recommendations}
          </div>

          {/* Próxima visita */}
          {record.nextVisit && (
            <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm">
              <span className="font-medium">Próxima visita: </span>
              {record.nextVisit}
            </div>
          )}

          {/* Archivos */}
          {record.attachments && record.attachments.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="text-gray-600">Archivos adjuntos:</span>
              {record.attachments.map((file, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md text-gray-700"
                >
                  <Paperclip size={14} />
                  {file}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
