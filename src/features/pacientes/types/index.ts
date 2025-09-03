export interface Diente {
  image?: string;
  nombre_dientes: string;
  numero_dientes: number;
  matriz: string[][];
}

export interface ModalProps {
  onClose: () => void;
  id_diente: number | null;
}

export interface SeccionesOdontogramaProps {
  seccion_odontograma: Diente[];
}

 function tipoDeDiente(n: number): "anterior" | "premolar" | "molar" {
  // Ojo: esto se usa para decidir la geometría de la matriz central.
  const ant = new Set([11, 12, 13, 21, 22, 23, 31, 32, 33, 41, 42, 43]);
  const pre = new Set([14, 15, 24, 25, 34, 35, 44, 45]);
  if (ant.has(n)) return "anterior";
  if (pre.has(n)) return "premolar";
  return "molar";
}
export function getNormalizedMatrix(n: number) {
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
