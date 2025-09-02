"use client";

import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Diente } from "../types";

/* ============================================================================
   UTILIDADES DE MATRICES
   - Normalizo las caras que le corresponden a cada diente según su tipo.
   - Mantengo todo en esta sección para no perseguir constantes sueltas luego.
   ============================================================================ */

/** Clasifico un número FDI en anterior/premolar/molar. */
function tipoDeDiente(n: number): "anterior" | "premolar" | "molar" {
  // Ojo: esto se usa para decidir la geometría de la matriz central.
  const ant = new Set([11, 12, 13, 21, 22, 23, 31, 32, 33, 41, 42, 43]);
  const pre = new Set([14, 15, 24, 25, 34, 35, 44, 45]);
  if (ant.has(n)) return "anterior";
  if (pre.has(n)) return "premolar";
  return "molar";
}

/**
 * Devuelve la matriz de botones por fila:
 *   - filaSup: 3 columnas (V, V2, V3)
 *   - filaCen: depende del tipo (3, 4 o 5 columnas)
 *   - filaInf: 3 columnas (P* o L*)
 *
 * Importante: la vista no muestra texto en las celdas;
 * uso estos códigos para accesibilidad y para el modal.
 */
function getNormalizedMatrix(n: number) {
  const esInferior = n >= 31;
  const tipo = tipoDeDiente(n);

  const filaSup = ["V", "V2", "V3"];

  const filaCen =
    tipo === "molar" ? ["D", "O", "M", "V3", "v3"] :
    tipo === "premolar" ? ["D", "O", "M", "V3"] :
    ["D", "I", "M"];

  // En inferiores reemplazo palatino por lingual
  const filaInf = esInferior ? ["L", "L2", "L3"] : ["P", "P2", "P3"];

  return [filaSup, filaCen, filaInf];
}

/* ============================================================================
   DATOS (IMÁGENES POR NÚMERO)
   - Mantengo los arrays en el orden en que quiero pintarlos en la arcada.
   - Cada item ya viene con su FDI y la ruta de imagen.
   ============================================================================ */

const superior_derecho: Diente[] = [
  { image: "/P18.jpg", nombre_dientes: "tercer molar", numero_dientes: 18, matriz: [] },
  { image: "/P17.jpg", nombre_dientes: "segundo molar", numero_dientes: 17, matriz: [] },
  { image: "/P16.jpg", nombre_dientes: "primer molar", numero_dientes: 16, matriz: [] },
  { image: "/P15.jpg", nombre_dientes: "segundo premolar", numero_dientes: 15, matriz: [] },
  { image: "/P14.jpg", nombre_dientes: "primer premolar", numero_dientes: 14, matriz: [] },
  { image: "/P13.jpg", nombre_dientes: "canino", numero_dientes: 13, matriz: [] },
  { image: "/P12.jpg", nombre_dientes: "incisivo lateral", numero_dientes: 12, matriz: [] },
  { image: "/P11.jpg", nombre_dientes: "incisivo central", numero_dientes: 11, matriz: [] },
];

const superior_izquierdo: Diente[] = [
  { image: "/P21.jpg", nombre_dientes: "incisivo central", numero_dientes: 21, matriz: [] },
  { image: "/P22.jpg", nombre_dientes: "incisivo lateral", numero_dientes: 22, matriz: [] },
  { image: "/P23.jpg", nombre_dientes: "canino", numero_dientes: 23, matriz: [] },
  { image: "/P24.jpg", nombre_dientes: "primer premolar", numero_dientes: 24, matriz: [] },
  { image: "/P25.jpg", nombre_dientes: "segundo premolar", numero_dientes: 25, matriz: [] },
  { image: "/P26.jpg", nombre_dientes: "primer molar", numero_dientes: 26, matriz: [] },
  { image: "/P27.jpg", nombre_dientes: "segundo molar", numero_dientes: 27, matriz: [] },
  { image: "/P28.jpg", nombre_dientes: "tercer molar", numero_dientes: 28, matriz: [] },
];

const inferior_derecho: Diente[] = [
  { image: "/P48.jpg", nombre_dientes: "tercer molar", numero_dientes: 48, matriz: [] },
  { image: "/P47.jpg", nombre_dientes: "segundo molar", numero_dientes: 47, matriz: [] },
  { image: "/P46.jpg", nombre_dientes: "primer molar", numero_dientes: 46, matriz: [] },
  { image: "/P45.jpg", nombre_dientes: "segundo premolar", numero_dientes: 45, matriz: [] },
  { image: "/P44.jpg", nombre_dientes: "primer premolar", numero_dientes: 44, matriz: [] },
  { image: "/P43.jpg", nombre_dientes: "canino", numero_dientes: 43, matriz: [] },
  { image: "/P42.jpg", nombre_dientes: "incisivo lateral", numero_dientes: 42, matriz: [] },
  { image: "/P41.jpg", nombre_dientes: "incisivo central", numero_dientes: 41, matriz: [] },
];

const inferior_izquierdo: Diente[] = [
  { image: "/P31.jpg", nombre_dientes: "incisivo central", numero_dientes: 31, matriz: [] },
  { image: "/P32.jpg", nombre_dientes: "incisivo lateral", numero_dientes: 32, matriz: [] },
  { image: "/P33.jpg", nombre_dientes: "canino", numero_dientes: 33, matriz: [] },
  { image: "/P34.jpg", nombre_dientes: "primer premolar", numero_dientes: 34, matriz: [] },
  { image: "/P35.jpg", nombre_dientes: "segundo premolar", numero_dientes: 35, matriz: [] },
  { image: "/P36.jpg", nombre_dientes: "primer molar", numero_dientes: 36, matriz: [] },
  { image: "/P37.jpg", nombre_dientes: "segundo molar", numero_dientes: 37, matriz: [] },
  { image: "/P38.jpg", nombre_dientes: "tercer molar", numero_dientes: 38, matriz: [] },
];

/* ============================================================================
   MODAL DETALLE
   - Es el diálogo que aparece al hacer click en una pieza o en una cara.
   - Mantengo el layout simple (header azul + formulario + historial).
   ============================================================================ */

type ToothDialogProps = {
  open: boolean;       // si está visible
  tooth?: Diente;      // diente activo
  cara?: string;       // cara seleccionada (opcional)
  onClose: () => void; // cierre del modal
};

const ToothDialog = ({ open, tooth, cara, onClose }: ToothDialogProps) => {
  // Armo el listado de caras a partir de la matriz normalizada (sin duplicados)
  const opcionesCara = useMemo(
    () => (tooth ? Array.from(new Set(getNormalizedMatrix(tooth.numero_dientes).flat())) : []),
    [tooth]
  );

  // Estado local del <select>
  const [caraSel, setCaraSel] = useState<string | undefined>(cara);

  // Si me cambian la "cara" desde afuera, sincronizo el <select>
  useEffect(() => setCaraSel(cara), [cara]);

  if (!open || !tooth) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()} // no cierro si hacen click dentro
      >
        {/* Header (estilo sistema actual) */}
        <div className="flex items-center justify-between bg-sky-700 px-4 py-3 text-white">
          <h3 className="font-semibold">Detalle Diente {tooth.numero_dientes}</h3>
          <button onClick={onClose} className="rounded px-2 py-1 hover:bg-white/10">✕</button>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* mini imagen arriba, solo representativa */}
          <div className="mb-4 flex items-center justify-center">
            <div className="relative h-16 w-12">
              <Image alt="tooth" src={tooth.image || "/P13.jpg"} fill className="object-contain" />
            </div>
          </div>

          <h4 className="mb-3 text-lg font-semibold text-slate-800">
            AGREGAR Odontograma Hallazgos
          </h4>

          {/* Campo de solo lectura con FDI + nombre */}
          <div className="mb-3">
            <label className="mb-1 block text-sm font-medium text-slate-700">DIENTE</label>
            <input
              value={`${tooth.numero_dientes} — ${tooth.nombre_dientes ?? ""}`}
              readOnly
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800"
            />
          </div>

          {/* Selección de cara (si viene seteada, se preselecciona) */}
          <div className="mb-6">
            <label className="mb-1 block text-sm font-medium text-slate-700">Cara</label>
            <select
              value={caraSel ?? ""}
              onChange={(e) => setCaraSel(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800"
            >
              <option value="" disabled>Seleccione…</option>
              {opcionesCara.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Acciones (por ahora, el Guardar solo cierra) */}
          <div className="mb-6 flex justify-end gap-3">
            <button onClick={onClose} className="rounded-lg border border-slate-300 px-4 py-2">
              Cancelar
            </button>
            <button
              onClick={onClose}
              className="rounded-lg bg-sky-600 px-4 py-2 text-white hover:bg-sky-700"
            >
              Guardar
            </button>
          </div>

          {/* Historial: dejo el contenedor para enganchar la data real luego */}
          <details className="rounded-lg border border-slate-200">
            <summary className="cursor-pointer select-none px-4 py-3 text-sm font-semibold">
              HISTORIAL
            </summary>
            <div className="px-4 pb-4 pt-2 text-sm text-slate-600">
              Aquí puedes listar cambios/observaciones previas del diente {tooth.numero_dientes}.
            </div>
          </details>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ============================================================================
   VISTA PRINCIPAL
   - Contiene la cabecera y las dos arcadas.
   - Maneja la apertura/cierre del modal centralizado.
   ============================================================================ */

const Odontograma = () => {
  // Estado del diálogo (mantengo todo junto para no tener 3 useState sueltos)
  const [dialog, setDialog] = useState<{ open: boolean; tooth?: Diente; cara?: string }>({
    open: false,
  });

  const openDialog = (tooth: Diente, cara?: string) => setDialog({ open: true, tooth, cara });
  const closeDialog = () => setDialog({ open: false });

  return (
    <div className="min-h-screen bg-white p-6 md:p-10">
      {/* Contenedor con límite de ancho y sin overflow horizontal */}
      <div className="mx-auto w-full max-w-screen-xl overflow-x-hidden rounded-3xl bg-white p-6 md:p-10 shadow-xl ring-1 ring-slate-200/60">
        <header className="mb-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-slate-800">Odontograma Digital</h1>
          <p className="mt-1 text-sm text-slate-500">Sistema de registro dental</p>
        </header>

        {/* Arcada superior */}
        <ArchRow
          rightItems={superior_derecho}
          leftItems={superior_izquierdo}
          labels={["V", "O", "P"]}
          onClickTooth={(t) => openDialog(t)}
          onClickFace={(t, cara) => openDialog(t, cara)}
        />

        <div className="my-10 h-px w-full bg-slate-300/60" />

        {/* Arcada inferior */}
        <ArchRow
          rightItems={inferior_derecho}
          leftItems={inferior_izquierdo}
          labels={["V", "O", "L"]}
          flipped
          onClickTooth={(t) => openDialog(t)}
          onClickFace={(t, cara) => openDialog(t, cara)}
        />
      </div>

      {/* Modal global (queda fuera del contenedor para cubrir toda la pantalla) */}
      <ToothDialog open={dialog.open} tooth={dialog.tooth} cara={dialog.cara} onClose={closeDialog} />
    </div>
  );
};

/* ============================================================================
   ARCADA (fila)
   - Construyo una grilla con 8 + línea + 8 + columna de letras.
   - Las columnas son fraccionadas, así que se adaptan al ancho disponible.
   ============================================================================ */

function ArchRow({
  rightItems, leftItems, labels, flipped, onClickTooth, onClickFace,
}: {
  rightItems: Diente[];
  leftItems: Diente[];
  labels: string[];
  flipped?: boolean;                                 // giro de imagen para inferiores
  onClickTooth: (tooth: Diente) => void;             // click en imagen
  onClickFace: (tooth: Diente, cara: string) => void;// click en matriz
}) {
  return (
    <div
      className="grid items-stretch"
      style={{
        // 8 columnas (derecha) + línea de división + 8 columnas (izquierda) + letras
        gridTemplateColumns:
          "repeat(8, minmax(0, 1fr)) 1.5px repeat(8, minmax(0, 1fr)) minmax(8px, 14px)",
        columnGap: "clamp(8px, 1vw, 16px)", // el respiro lateral entre piezas
      }}
    >
      {/* 18 → 11 o 48 → 41 */}
      {rightItems.map((d) => (
        <ToothCard
          key={d.numero_dientes}
          diente={d}
          flipped={flipped}
          onClickTooth={() => onClickTooth(d)}
          onClickFace={(cara) => onClickFace(d, cara)}
        />
      ))}

      {/* Línea media vertical que separa hemiarcadas */}
      <div className="h-full w-[1.5px] bg-slate-500/80" aria-hidden />

      {/* 21 → 28 o 31 → 38 */}
      {leftItems.map((d) => (
        <ToothCard
          key={d.numero_dientes}
          diente={d}
          flipped={flipped}
          onClickTooth={() => onClickTooth(d)}
          onClickFace={(cara) => onClickFace(d, cara)}
        />
      ))}

      {/* Columna de letras (dentro del grid para no provocar overflow) */}
      <div className="flex flex-col items-center justify-center text-[10px] tracking-wider text-slate-500">
        {labels.map((s) => <div key={s} className="leading-4">{s}</div>)}
      </div>
    </div>
  );
}

/* ============================================================================
   TARJETA DE DIENTE
   - Imagen clickeable arriba.
   - Matriz de 3 filas abajo; SIN texto visible.
   - Quité las líneas azul superior e inferior: dejo solo “internas”.
   ============================================================================ */

function ToothCard({
  diente, flipped, onClickTooth, onClickFace,
}: {
  diente: Diente;
  flipped?: boolean;
  onClickTooth: () => void;
  onClickFace: (cara: string) => void;
}) {
  const matriz = getNormalizedMatrix(diente.numero_dientes);
  const lineColor = "#2A9CFF"; // color único para líneas internas de la matriz

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
      className="w-full overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200"
    >
      {/* Encabezado con el FDI */}
      <div className="rounded-t-2xl bg-slate-50 px-2 py-1 text-center text-[10px] sm:text-xs font-semibold text-slate-700">
        {diente.numero_dientes}
      </div>

      {/* Imagen (click abre modal del diente) */}
      <div className="px-2 pt-2 sm:px-3">
        <button
          onClick={onClickTooth}
          className="relative mx-auto block h-[clamp(56px,8vw,96px)] w-full rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
          title={`Diente ${diente.numero_dientes}`}
        >
          <Image
            src={diente.image || "/P13.jpg"}
            alt={`${diente.nombre_dientes ?? "Diente"} - ${diente.numero_dientes}`}
            fill
            className={`object-contain p-1 ${flipped ? "rotate-180" : ""}`}
            sizes="(max-width: 1280px) 70px, 90px"
          />
        </button>
      </div>

      {/* Matriz de 3 filas (sin texto, accesible con sr-only) */}
      <div className="px-2 pb-2 pt-2 sm:px-3">
        <div className="mx-auto w-full overflow-hidden rounded-none shadow ring-1 ring-slate-200">
          <div className="grid grid-rows-3" style={{ rowGap: 0 }}>
            {matriz.map((fila, r) => (
              <div
                key={r}
                className="grid"
                style={{
                  gridTemplateColumns: `repeat(${fila.length}, minmax(0, 1fr))`,
                  // Solo líneas HORIZONTALES internas:
                  // - nada en la fila 0
                  // - línea arriba en filas 1 y 2
                  borderTop: r > 0 ? `1px solid ${lineColor}` : undefined,
                }}
              >
                {fila.map((cara, c) => (
                  <button
                    key={c}
                    onClick={() => onClickFace(cara)}
                    className="flex items-center justify-center"
                    style={{
                      height: "clamp(18px, 2.1vw, 28px)",
                      // Líneas VERTICALES internas (todas menos la última columna)
                      borderRight: c < fila.length - 1 ? `1px solid ${lineColor}` : undefined,
                    }}
                    title={`Cara ${cara}`}
                  >
                    {/* Texto oculto para accesibilidad y para el modal */}
                    <span className="sr-only">{cara}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Odontograma;
