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
