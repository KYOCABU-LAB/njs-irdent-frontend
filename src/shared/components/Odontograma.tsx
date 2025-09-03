"use client";
import { useState } from "react";
import ArchRow from "./ArchRow";
import ToothDialog from "./ToothDialog";
import { Diente } from "../types";

const superior_derecho: Diente[] = [
  {
    image: "/P18.jpg",
    nombre_dientes: "tercer molar",
    numero_dientes: 18,
    matriz: [],
  },
  {
    image: "/P17.jpg",
    nombre_dientes: "segundo molar",
    numero_dientes: 17,
    matriz: [],
  },
  {
    image: "/P16.jpg",
    nombre_dientes: "primer molar",
    numero_dientes: 16,
    matriz: [],
  },
  {
    image: "/P15.jpg",
    nombre_dientes: "segundo premolar",
    numero_dientes: 15,
    matriz: [],
  },
  {
    image: "/P14.jpg",
    nombre_dientes: "primer premolar",
    numero_dientes: 14,
    matriz: [],
  },
  {
    image: "/P13.jpg",
    nombre_dientes: "canino",
    numero_dientes: 13,
    matriz: [],
  },
  {
    image: "/P12.jpg",
    nombre_dientes: "incisivo lateral",
    numero_dientes: 12,
    matriz: [],
  },
  {
    image: "/P11.jpg",
    nombre_dientes: "incisivo central",
    numero_dientes: 11,
    matriz: [],
  },
];

const superior_izquierdo: Diente[] = [
  {
    image: "/P21.jpg",
    nombre_dientes: "incisivo central",
    numero_dientes: 21,
    matriz: [],
  },
  {
    image: "/P22.jpg",
    nombre_dientes: "incisivo lateral",
    numero_dientes: 22,
    matriz: [],
  },
  {
    image: "/P23.jpg",
    nombre_dientes: "canino",
    numero_dientes: 23,
    matriz: [],
  },
  {
    image: "/P24.jpg",
    nombre_dientes: "primer premolar",
    numero_dientes: 24,
    matriz: [],
  },
  {
    image: "/P25.jpg",
    nombre_dientes: "segundo premolar",
    numero_dientes: 25,
    matriz: [],
  },
  {
    image: "/P26.jpg",
    nombre_dientes: "primer molar",
    numero_dientes: 26,
    matriz: [],
  },
  {
    image: "/P27.jpg",
    nombre_dientes: "segundo molar",
    numero_dientes: 27,
    matriz: [],
  },
  {
    image: "/P28.jpg",
    nombre_dientes: "tercer molar",
    numero_dientes: 28,
    matriz: [],
  },
];

const inferior_derecho: Diente[] = [
  {
    image: "/P48.jpg",
    nombre_dientes: "tercer molar",
    numero_dientes: 48,
    matriz: [],
  },
  {
    image: "/P47.jpg",
    nombre_dientes: "segundo molar",
    numero_dientes: 47,
    matriz: [],
  },
  {
    image: "/P46.jpg",
    nombre_dientes: "primer molar",
    numero_dientes: 46,
    matriz: [],
  },
  {
    image: "/P45.jpg",
    nombre_dientes: "segundo premolar",
    numero_dientes: 45,
    matriz: [],
  },
  {
    image: "/P44.jpg",
    nombre_dientes: "primer premolar",
    numero_dientes: 44,
    matriz: [],
  },
  {
    image: "/P43.jpg",
    nombre_dientes: "canino",
    numero_dientes: 43,
    matriz: [],
  },
  {
    image: "/P42.jpg",
    nombre_dientes: "incisivo lateral",
    numero_dientes: 42,
    matriz: [],
  },
  {
    image: "/P41.jpg",
    nombre_dientes: "incisivo central",
    numero_dientes: 41,
    matriz: [],
  },
];

const inferior_izquierdo: Diente[] = [
  {
    image: "/P31.jpg",
    nombre_dientes: "incisivo central",
    numero_dientes: 31,
    matriz: [],
  },
  {
    image: "/P32.jpg",
    nombre_dientes: "incisivo lateral",
    numero_dientes: 32,
    matriz: [],
  },
  {
    image: "/P33.jpg",
    nombre_dientes: "canino",
    numero_dientes: 33,
    matriz: [],
  },
  {
    image: "/P34.jpg",
    nombre_dientes: "primer premolar",
    numero_dientes: 34,
    matriz: [],
  },
  {
    image: "/P35.jpg",
    nombre_dientes: "segundo premolar",
    numero_dientes: 35,
    matriz: [],
  },
  {
    image: "/P36.jpg",
    nombre_dientes: "primer molar",
    numero_dientes: 36,
    matriz: [],
  },
  {
    image: "/P37.jpg",
    nombre_dientes: "segundo molar",
    numero_dientes: 37,
    matriz: [],
  },
  {
    image: "/P38.jpg",
    nombre_dientes: "tercer molar",
    numero_dientes: 38,
    matriz: [],
  },
];

const Odontograma2 = () => {
  const [dialog, setDialog] = useState<{
    open: boolean;
    tooth?: Diente;
    cara?: string;
  }>({ open: false });
  const openDialog = (tooth: Diente, cara?: string) =>
    setDialog({ open: true, tooth, cara });
  const closeDialog = () => setDialog({ open: false });
  return (
    <div className="min-h-screen bg-white p-6 md:p-10">
      <div className="mx-auto w-full max-w-screen-xl overflow-x-hidden rounded-3xl bg-white p-6 md:p-10 shadow-xl ring-1 ring-slate-200/60">
        <header className="mb-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-slate-800">
            Odontograma Digital
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Sistema de registro dental
          </p>
        </header>
        <ArchRow
          rightItems={superior_derecho}
          leftItems={superior_izquierdo}
          labels={["V", "O", "P"]}
          onClickTooth={openDialog}
          onClickFace={openDialog}
        />
        <div className="my-10 h-px w-full bg-slate-300/60" />
        <ArchRow
          rightItems={inferior_derecho}
          leftItems={inferior_izquierdo}
          labels={["V", "O", "L"]}
          flipped
          onClickTooth={openDialog}
          onClickFace={openDialog}
        />
      </div>
      <ToothDialog
        open={dialog.open}
        tooth={dialog.tooth}
        cara={dialog.cara}
        onClose={closeDialog}
      />
    </div>
  );
};
export default Odontograma2;
