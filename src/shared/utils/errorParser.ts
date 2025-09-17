/**
 * Función para parsear el error de una respuesta de backend y regresar un mensaje de error
 * legible para el usuario.
 * @param {string | undefined} error - el error de la respuesta de backend
 * @returns {string} - el mensaje de error parseado
 */
export const parseBackendError = (error: string | undefined): string => {
  if (!error) {
    return "Error desconocido. Por favor, inténtalo de nuevo.";
  }

  let errorMessage = "Ha ocurrido un error. Por favor, inténtalo de nuevo.";
  try {
    const errorObj = JSON.parse(error);
    if (errorObj.message) {
      if (Array.isArray(errorObj.message)) {
        errorMessage = errorObj.message.join(", ");
      } else {
        errorMessage = errorObj.message;
      }
    } else if (typeof errorObj === "string") {
      errorMessage = errorObj;
    }
  } catch (e) {
    errorMessage = error;
  }
  return errorMessage;
};
