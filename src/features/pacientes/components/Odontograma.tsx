"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Diente, ModalProps, SeccionesOdontogramaProps } from "../types";

const Odontograma = () => {
  const [showModal, setShowModal] = useState(false);
  const [id_diente, setId_diente] = useState<number | null>(null);

  const superior_derecho: Diente[] = [
    {
      image: "/P13.jpg",
      nombre_dientes: "tercer molar",
      numero_dientes: 18,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "M", "V3", "v3"],
        ["P", "P2", "P3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "segundo molar",
      numero_dientes: 17,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "primer molar",
      numero_dientes: 16,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "segundo premolar",
      numero_dientes: 15,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "primer premolar",
      numero_dientes: 14,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "canino",
      numero_dientes: 13,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "I", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "incisivo lateral",
      numero_dientes: 12,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "I", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "incisivo central",
      numero_dientes: 11,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "I", "M"],
        ["P", "P2", "P3"],
      ],
    },
  ];

  const superior_izquierdo: Diente[] = [
    {
      image: "/P13.jpg",
      nombre_dientes: "incisivo central",
      numero_dientes: 21,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "I", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "incisivo lateral",
      numero_dientes: 22,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "I", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "canino",
      numero_dientes: 23,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "I", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "primer premolar",
      numero_dientes: 24,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "segundo premolar",
      numero_dientes: 25,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "primer molar",
      numero_dientes: 26,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "segundo molar",
      numero_dientes: 27,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "tercer molar",
      numero_dientes: 28,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "M"],
        ["P", "P2", "P3"],
      ],
    },
  ];

  const inferior_derecho: Diente[] = [
    {
      image: "/P13.jpg",
      nombre_dientes: "tercer molar",
      numero_dientes: 48,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "segundo molar",
      numero_dientes: 47,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "primer molar",
      numero_dientes: 46,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "segundo premolar",
      numero_dientes: 45,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "primer premolar",
      numero_dientes: 44,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "canino",
      numero_dientes: 43,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "I", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "incisivo lateral",
      numero_dientes: 42,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "I", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "incisivo central",
      numero_dientes: 41,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "I", "M"],
        ["L", "L2", "L3"],
      ],
    },
  ];

  const inferior_izquierdo: Diente[] = [
    {
      image: "/P13.jpg",
      nombre_dientes: "incisivo central",
      numero_dientes: 31,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "I", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "incisivo lateral",
      numero_dientes: 32,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "I", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "canino",
      numero_dientes: 33,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "I", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "primer premolar",
      numero_dientes: 34,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "segundo premolar",
      numero_dientes: 35,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "primer molar",
      numero_dientes: 36,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "segundo molar",
      numero_dientes: 37,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      image: "/P13.jpg",
      nombre_dientes: "tercer molar",
      numero_dientes: 38,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "M"],
        ["L", "L2", "L3"],
      ],
    },
  ];

  const clickCara = (index: number) => {
    console.log("Cara clicked:", index);
    setShowModal(true);
    setId_diente(index);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-slate-800 mb-2 tracking-tight">
            Odontograma Digital
          </h1>
          <p className="text-slate-500 font-light">
            Sistema de registro dentallll
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-light text-slate-700 mb-2">
                Arcada Superior
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
            </div>

            <div className="flex justify-center items-start gap-16">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-600 tracking-wide">
                    DERECHO
                  </span>
                </div>
                <Secciones_odontograma
                  seccion_odontograma={superior_derecho}
                  clickCara={clickCara}
                />
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-600 tracking-wide">
                    IZQUIERDO
                  </span>
                </div>
                <Secciones_odontograma
                  seccion_odontograma={superior_izquierdo}
                  clickCara={clickCara}
                />
              </div>
            </div>
          </div>

          {/* Arcada Inferior */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-light text-slate-700 mb-2">
                Arcada Inferior
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full"></div>
            </div>

            <div className="flex justify-center items-start gap-16">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-600 tracking-wide">
                    DERECHO
                  </span>
                </div>
                <Secciones_odontograma
                  seccion_odontograma={inferior_derecho}
                  clickCara={clickCara}
                />
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-600 tracking-wide">
                    IZQUIERDO
                  </span>
                </div>
                <Secciones_odontograma
                  seccion_odontograma={inferior_izquierdo}
                  clickCara={clickCara}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal id_diente={id_diente} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

const Secciones_odontograma = ({
  seccion_odontograma,
  clickCara,
}: SeccionesOdontogramaProps & {
  clickCara: (index: number) => void;
}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {seccion_odontograma.map((diente, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <div className="bg-gradient-to-r from-slate-100 to-slate-50 px-3 py-2 border-b border-slate-200/50">
            <p className="text-xs font-semibold text-slate-700 text-center tracking-wide">
              {diente.numero_dientes}
            </p>
          </div>

          {/* Imagen del diente */}
          {diente.image && (
            <div className="flex justify-center p-3 bg-gradient-to-b from-white to-slate-50">
              <div className="relative">
                <Image
                  width={32}
                  height={32}
                  src={diente.image}
                  alt={`${diente.nombre_dientes} - ${diente.numero_dientes}`}
                  className="rounded-lg shadow-sm"
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-slate-200/50"></div>
              </div>
            </div>
          )}

          {/* Matriz del diente */}
          <div className="p-3">
            <div className="relative group">
              <div className="w-24 h-24 mx-auto p-1 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-200/60 group-hover:shadow-lg transition-all duration-300">
                <div className="grid grid-rows-3 gap-px w-full h-full bg-blue-700/40 rounded-xl overflow-hidden">
                  {diente.matriz.map((fila, filaIndex) => (
                    <div
                      key={filaIndex}
                      className="grid gap-px"
                      style={{
                        gridTemplateColumns: `repeat(${fila.length}, 1fr)`,
                      }}
                    >
                      {fila.map((cara, caraIndex) => (
                        <button
                          key={caraIndex}
                          className="bg-white hover:bg-blue-50 active:bg-blue-100 text-center cursor-pointer transition-all duration-200 ease-out flex items-center justify-center hover:shadow-sm transform hover:scale-105 active:scale-95 group/cell"
                          onClick={() => clickCara(caraIndex)}
                          id={`cara_${cara}_${diente.numero_dientes}`}
                          title={`Cara ${cara} - Diente ${diente.numero_dientes}`}
                        >
                          <span className="text-xs font-medium text-gray-700 group-hover/cell:text-blue-600 transition-colors duration-150">
                            {cara}
                          </span>
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Modal = ({ onClose, id_diente }: ModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black/20 backdrop-blur-sm inset-0 fixed flex justify-center items-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-semibold text-lg">
              {id_diente}
            </span>
          </div>

          <h2 className="text-2xl font-light text-slate-800 mb-2">
            Detalles de la Cara
          </h2>

          <p className="text-slate-500 mb-8">
            Información del diente seleccionado
          </p>

          <div className="bg-slate-50 rounded-2xl p-4 mb-6">
            <p className="text-sm text-slate-600 mb-1">ID del Diente</p>
            <p className="text-lg font-semibold text-slate-800">{id_diente}</p>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium py-3 px-6 rounded-2xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Odontograma;
