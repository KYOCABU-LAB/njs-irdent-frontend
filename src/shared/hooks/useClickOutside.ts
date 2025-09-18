import { useEffect, RefObject, useCallback } from "react";

/**
 * Hook personalizado para detectar clicks fuera de un elemento
 * @param ref - Referencia al elemento DOM
 * @param callback - Función que se ejecuta cuando se hace click fuera
 * @param enabled - Si el hook está habilitado (opcional, por defecto true)
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  callback: () => void,
  enabled: boolean = true
) {
  const memoizedCallback = useCallback(callback, [callback]);

  useEffect(() => {
    if (!enabled) return;

    /**
     * Función que se ejecuta cuando se hace click fuera del elemento
     * referenciado por `ref`
     */
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        ref.current &&
        event.target &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        memoizedCallback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, memoizedCallback, enabled]);
}

export default useClickOutside;
