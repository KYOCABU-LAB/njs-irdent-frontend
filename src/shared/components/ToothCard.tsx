import { motion } from "framer-motion";
import Image from "next/image";
import { Diente,getNormalizedMatrix } from "../../features/pacientes/types";

type ToothCardProps = {
  diente: Diente;
  flipped?: boolean;
  onClickTooth: () => void;
  onClickFace: (cara: string) => void;
};
const ToothCard = ({ diente, flipped, onClickTooth, onClickFace }: ToothCardProps) => {
  const matriz = getNormalizedMatrix(diente.numero_dientes);
  const lineColor = "#2A9CFF";
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200"
    >
      <div className="rounded-t-2xl bg-slate-50 px-2 py-1 text-center text-[10px] sm:text-xs font-semibold text-slate-700">
        {diente.numero_dientes}
      </div>
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
      <div className="px-2 pb-2 pt-2 sm:px-3">
        <div className="mx-auto w-full overflow-hidden rounded-none shadow ring-1 ring-slate-200">
          <div className="grid grid-rows-3" style={{ rowGap: 0 }}>
            {matriz.map((fila, r) => (
              <div
                key={r}
                className="grid"
                style={{
                  gridTemplateColumns: `repeat(${fila.length}, minmax(0, 1fr))`,
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
                      borderRight: c < fila.length - 1 ? `1px solid ${lineColor}` : undefined,
                    }}
                    title={`Cara ${cara}`}
                  >
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
};
export default ToothCard;