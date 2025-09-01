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
        ["D", "O", "M"],
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
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-10xl mx-auto space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-6 text-center text-blue-700">
            Arcada Superior
          </h2>
          <div className="flex justify-center gap-8">
            <div>
              <h3 className="text-sm font-medium mb-3 text-center text-blue-600">
                Derecho
              </h3>
              <Secciones_odontograma
                seccion_odontograma={superior_derecho}
                clickCara={clickCara}
              />
            </div>
            <div>
              <h3 className="text-sm font-medium mb-3 text-center text-green-600">
                Izquierdo
              </h3>
              <Secciones_odontograma
                seccion_odontograma={superior_izquierdo}
                clickCara={clickCara}
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-6 text-center text-orange-700">
            Arcada Inferior
          </h2>
          <div className="flex justify-center gap-8">
            <div>
              <h3 className="text-sm font-medium mb-3 text-center text-orange-600">
                Derecho
              </h3>
              <Secciones_odontograma
                seccion_odontograma={inferior_derecho}
                clickCara={clickCara}
              />
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3 text-center text-purple-600">
                Izquierdo
              </h3>
              <Secciones_odontograma
                seccion_odontograma={inferior_izquierdo}
                clickCara={clickCara}
              />
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
    <div className="flex flex-wrap gap-2 justify-center">
      {seccion_odontograma.map((diente, index) => (
        <div key={index} className=" bg-white">
          <div className="text-center p-1 bg-gray-100 ">
            <p className="text-xs font-bold">{diente.numero_dientes}</p>
          </div>

          {diente.image && (
            <div className="flex justify-center p-1 border-b border-gray-800">
              <Image
                width={30}
                height={30}
                src={diente.image}
                alt={`${diente.nombre_dientes} - ${diente.numero_dientes}`}
              />
            </div>
          )}

          <table
            className="border-collapse w-full"
            cellSpacing="0"
            cellPadding="0"
          >
            <tbody className="flex flex-col bg-white border border-gray-800">
              {diente.matriz.map((fila, filaIndex) => (
                <tr key={filaIndex} className="flex">
                  {fila.map((cara, caraIndex) => {
                    const isMiddleRow = filaIndex === 1;
                    const cellWidth = isMiddleRow ? "w-6" : "w-4";
                    const cellHeight = isMiddleRow ? "h-11" : "h-6";

                    return (
                      <td
                        key={caraIndex}
                        className={`${cellWidth} ${cellHeight} border border-gray-900 text-center cursor-pointer hover:bg-blue-100 transition-colors  flex-1`}
                        onClick={() => clickCara(caraIndex)}
                        id={`cara_${cara}_${diente.numero_dientes}`}
                        title={`Cara ${cara} - Diente ${diente.numero_dientes}`}
                      >
                        <span className="text-xs">{cara}</span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
      className="bg-black/50 inset-0 fixed flex justify-center items-center"
    >
      <div className="bg-white p-4 rounded">
        <h2 className="text-lg font-bold">Detalles de la cara</h2>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Cerrar
        </button>

        <div className="mt-2">
          <p>ID Diente: {id_diente}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Odontograma;
