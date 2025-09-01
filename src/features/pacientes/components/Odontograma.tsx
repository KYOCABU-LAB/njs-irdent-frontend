"use client";

import { UserCog2Icon, UserIcon } from "lucide-react";
import { Router } from "next/router";
import { useState } from "react";

const Odontograma = () => {
  const [showModal, setShowModal] = useState(false);
  const [id_diente, setId_diente] = useState<number | null>(null);

  const superior_derecho = [
    {
      nombre_dientes: "tercer molar",
      numero_dientes: 18,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      nombre_dientes: "segundo molar",
      numero_dientes: 17,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      nombre_dientes: "primer molar",
      numero_dientes: 16,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      nombre_dientes: "segundo premolar",
      numero_dientes: 15,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      nombre_dientes: "primer premolar",
      numero_dientes: 14,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      nombre_dientes: "canino",
      numero_dientes: 13,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      nombre_dientes: "incisivo lateral",
      numero_dientes: 12,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      nombre_dientes: "incisivo central",
      numero_dientes: 11,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["P", "P2", "P3"],
      ],
    },
  ];

  const superior_izquierdo = [
    {
      nombre_dientes: "tercer molar",
      numero_dientes: 28,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      nombre_dientes: "segundo molar",
      numero_dientes: 27,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      nombre_dientes: "primer molar",
      numero_dientes: 26,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      nombre_dientes: "segundo premolar",
      numero_dientes: 25,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      nombre_dientes: "primer premolar",
      numero_dientes: 24,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      nombre_dientes: "canino",
      numero_dientes: 23,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      nombre_dientes: "incisivo lateral",
      numero_dientes: 22,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["P", "P2", "P3"],
      ],
    },
    {
      nombre_dientes: "incisivo central",
      numero_dientes: 21,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["P", "P2", "P3"],
      ],
    },
  ];

  const inferior_derecho = [
    {
      nombre_dientes: "tercer molar",
      numero_dientes: 48,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      nombre_dientes: "segundo molar",
      numero_dientes: 47,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      nombre_dientes: "primer molar",
      numero_dientes: 46,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      nombre_dientes: "segundo premolar",
      numero_dientes: 45,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      nombre_dientes: "primer premolar",
      numero_dientes: 44,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      nombre_dientes: "canino",
      numero_dientes: 43,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      nombre_dientes: "incisivo lateral",
      numero_dientes: 42,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      nombre_dientes: "incisivo central",
      numero_dientes: 41,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["L", "L2", "L3"],
      ],
    },
  ];

  const inferior_izquierdo = [
    {
      nombre_dientes: "incisivo central",
      numero_dientes: 31,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      nombre_dientes: "incisivo lateral",
      numero_dientes: 32,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      nombre_dientes: "canino",
      numero_dientes: 33,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      nombre_dientes: "primer premolar",
      numero_dientes: 34,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      nombre_dientes: "segundo premolar",
      numero_dientes: 35,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      nombre_dientes: "primer molar",
      numero_dientes: 36,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      nombre_dientes: "segundo molar",
      numero_dientes: 37,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
        ["L", "L2", "L3"],
      ],
    },
    {
      nombre_dientes: "tercer molar",
      numero_dientes: 38,
      matriz: [
        ["V", "V2", "V3"],
        ["D", "O", "O2", "O3", "M"],
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
    <div className="justify-center items-center flex *:cursor-pointer">
      <table id="caras" className="bg-white" cellSpacing="0" cellPadding="0">
        <tbody>
          <tr className="h-20 flex-col flex">
            {superior_derecho.splice(0, 1).map((diente, index) => (
              <td key={index} className="flex">
                {diente.matriz[0].map((cara, idx) => (
                  <span
                    key={idx}
                    className="border border-black flex-1 justify-center items-center flex"
                    onClick={() => clickCara(idx)}
                    id={`cara_${cara}`}
                  >
                    {cara}
                  </span>
                ))}
              </td>
            ))}
            {superior_derecho.splice(0, 1).map((diente, index) => (
              <td key={index} className="flex">
                {diente.matriz[1].map((cara, idx) => (
                  <span
                    key={idx}
                    className="border border-black flex-1 justify-center items-center flex"
                    onClick={() => clickCara(idx)}
                    id={`cara_${cara}`}
                  >
                    {cara}
                  </span>
                ))}
              </td>
            ))}

            {superior_derecho.splice(0, 1).map((diente, index) => (
              <td key={index} className="flex">
                {diente.matriz[2].map((cara, idx) => (
                  <span
                    key={idx}
                    className="border border-black flex-1 justify-center items-center flex"
                    onClick={() => clickCara(idx)}
                    id={`cara_${cara}`}
                  >
                    {cara}
                  </span>
                ))}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      {showModal && (
        <Modal id_diente={id_diente} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

const Modal = ({
  onClose,
  id_diente,
}: {
  onClose: () => void;
  id_diente: number | null;
}) => {
  return (
    <div className="bg-black/50 inset-0 fixed flex justify-center items-center">
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
    </div>
  );
};

export default Odontograma;
