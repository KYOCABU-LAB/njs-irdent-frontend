import ToothCard from "./ToothCard";
import { Diente } from "../../features/pacientes/types";

type ArchRowProps = {
  rightItems: Diente[];
  leftItems: Diente[];
  labels: string[];
  flipped?: boolean;
  onClickTooth: (tooth: Diente) => void;
  onClickFace: (tooth: Diente, cara: string) => void;
};
const ArchRow = ({ rightItems, leftItems, labels, flipped, onClickTooth, onClickFace }: ArchRowProps) => {
  return (
    <div
      className="grid items-stretch"
      style={{
        gridTemplateColumns: "repeat(8, minmax(0, 1fr)) 1.5px repeat(8, minmax(0, 1fr)) minmax(8px, 14px)",
        columnGap: "clamp(8px, 1vw, 16px)",
      }}
    >
      {rightItems.map((d) => (
        <ToothCard
          key={d.numero_dientes}
          diente={d}
          flipped={flipped}
          onClickTooth={() => onClickTooth(d)}
          onClickFace={(cara) => onClickFace(d, cara)}
        />
      ))}
      <div className="h-full w-[1.5px] bg-slate-500/80" aria-hidden />
      {leftItems.map((d) => (
        <ToothCard
          key={d.numero_dientes}
          diente={d}
          flipped={flipped}
          onClickTooth={() => onClickTooth(d)}
          onClickFace={(cara) => onClickFace(d, cara)}
        />
      ))}
      <div className="flex flex-col items-center justify-center text-[10px] tracking-wider text-slate-500">
        {labels.map((s) => <div key={s} className="leading-4">{s}</div>)}
      </div>
    </div>
  );
};
export default ArchRow;