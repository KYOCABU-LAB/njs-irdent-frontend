
import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Diente,getNormalizedMatrix } from "../../features/pacientes/types";

type ToothDialogProps = {
  open: boolean;
  tooth?: Diente;
  cara?: string;
  onClose: () => void;
};
const ToothDialog = ({ open, tooth, cara, onClose }: ToothDialogProps) => {
  const opcionesCara = useMemo(() => (tooth ? Array.from(new Set(getNormalizedMatrix(tooth.numero_dientes).flat())) : []), [tooth]);
  const [caraSel, setCaraSel] = useState<string | undefined>(cara);
  useEffect(() => setCaraSel(cara), [cara]);
  if (!open || !tooth) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between bg-sky-700 px-4 py-3 text-white">
          <h3 className="font-semibold">Detalle Diente {tooth.numero_dientes}</h3>
          <button onClick={onClose} className="rounded px-2 py-1 hover:bg-white/10">✕</button>
        </div>
        <div className="p-6">
          <div className="mb-4 flex items-center justify-center">
            <div className="relative h-16 w-12">
              <Image alt="tooth" src={tooth.image || "/P13.jpg"} fill className="object-contain" />
            </div>
          </div>
          <h4 className="mb-3 text-lg font-semibold text-slate-800">AGREGAR Odontograma Hallazgos</h4>
          <div className="mb-3">
            <label className="mb-1 block text-sm font-medium text-slate-700">DIENTE</label>
            <input
              value={`${tooth.numero_dientes} — ${tooth.nombre_dientes ?? ""}`}
              readOnly
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800"
            />
          </div>
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
          <div className="mb-6 flex justify-end gap-3">
            <button onClick={onClose} className="rounded-lg border border-slate-300 px-4 py-2">Cancelar</button>
            <button onClick={onClose} className="rounded-lg bg-sky-600 px-4 py-2 text-white hover:bg-sky-700">Guardar</button>
          </div>
          <details className="rounded-lg border border-slate-200">
            <summary className="cursor-pointer select-none px-4 py-3 text-sm font-semibold">HISTORIAL</summary>
            <div className="px-4 pb-4 pt-2 text-sm text-slate-600">
              Aquí puedes listar cambios/observaciones previas del diente {tooth.numero_dientes}.
            </div>
          </details>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default ToothDialog;