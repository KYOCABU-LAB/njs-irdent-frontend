import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { getSession, signOut } from "next-auth/react";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export class HttpClient {
  private static instanciaApi: AxiosInstance;
  /**
   *  Obtiene la instancia de Axios
   * @returns Instancia de Axios
   */
  private static obtenerInstanciaAxios(): AxiosInstance {
    if (!HttpClient.instanciaApi) {
      /**
       * Instancia de Axios
       */
      HttpClient.instanciaApi = axios.create({
        baseURL: API_URL,
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      /**
       * Interceptador de solicitudes
       */
      HttpClient.instanciaApi.interceptors.request.use(
        async (config) => {
          const session = await getSession();
          if (session?.accessToken) {
            config.headers.Authorization = `Bearer ${session.accessToken}`;

            // Log en desarrollo
            if (process.env.NODE_ENV === "development") {
              console.log(
                `🔐 Request autenticado: ${config.method?.toUpperCase()} ${
                  config.url
                }`
              );
            }
          } else if (process.env.NODE_ENV === "development") {
            console.log(
              `🔓 Request sin autenticación: ${config.method?.toUpperCase()} ${
                config.url
              }`
            );
          }
          return config;
        },
        (error) => {
          console.error("❌ Error en interceptor de request:", error);
          return Promise.reject(error);
        }
      );
      /**
       * Interceptador de respuestas
       */
      HttpClient.instanciaApi.interceptors.response.use(
        (response) => {
          // Log de respuestas exitosas en desarrollo
          if (process.env.NODE_ENV === "development") {
            console.log(
              `✅ ${response.config.method?.toUpperCase()} ${
                response.config.url
              } - ${response.status}`
            );
          }
          return response;
        },
        async (error: AxiosError) => {
          // Log detallado de errores
          if (process.env.NODE_ENV === "development") {
            console.error(
              `❌ ${error.config?.method?.toUpperCase()} ${
                error.config?.url
              } - ${error.response?.status}`,
              {
                status: error.response?.status,
                data: error.response?.data,
                message: error.message,
              }
            );
          }

          // Si es un error de autenticación
          if (error.response?.status === 401) {
            console.warn("🔒 Token expirado o inválido, redirigiendo al login");
            signOut({ callbackUrl: "/auth/signin" });
          }

          // Si es rate limiting
          if (error.response?.status === 429) {
            console.warn("⚠️ Rate limit excedido, demasiadas peticiones");
          }

          return Promise.reject(error);
        }
      );
    }
    return HttpClient.instanciaApi;
  }

  /**
   * Realiza una petición GET a la url especificada.
   * @template T tipo de dato que se espera recibir en la respuesta.
   * @param {string} url URL a la que se realizará la petición.
   * @param {AxiosRequestConfig} [config] Configuración adicional de la petición.
   * @returns {Promise<AxiosResponse<T>>} Promesa que se resuelve con la respuesta completa.
   */
  static async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return await HttpClient.obtenerInstanciaAxios().get<T>(url, config);
  }

  /**
   * Realiza una petición POST a la url especificada.
   * @template T Tipo de dato que se espera recibir en la respuesta.
   * @param {string} url URL a la que se realizará la petición.
   * @param {unknown} [data] Datos a enviar en el cuerpo de la petición.
   * @param {AxiosRequestConfig} [config] Configuración adicional de la petición.
   * @returns {Promise<AxiosResponse<T>>} Promesa que se resuelve con la respuesta completa.
   */
  static async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return await HttpClient.obtenerInstanciaAxios().post<T>(
      url,
      data || {},
      config
    );
  }

  /**
   * Realiza una petición PUT a la url especificada.
   * @template T Tipo de dato que se espera recibir en la respuesta.
   * @param {string} url URL a la que se realizará la petición.
   * @param {unknown} data Datos a enviar en el cuerpo de la petición.
   * @param {AxiosRequestConfig} [config] Configuración adicional de la petición.
   * @returns {Promise<AxiosResponse<T>>} Promesa que se resuelve con la respuesta completa.
   */
  static async put<T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return await HttpClient.obtenerInstanciaAxios().put<T>(url, data, config);
  }

  /**
   * Realiza una petición DELETE a la url especificada.
   * @template T Tipo de dato que se espera recibir en la respuesta.
   * @param {string} url URL a la que se realizará la petición.
   * @param {AxiosRequestConfig} [config] Configuración adicional de la petición.
   * @returns {Promise<AxiosResponse<T>>} Promesa que se resuelve con la respuesta completa.
   */
  static async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return await HttpClient.obtenerInstanciaAxios().delete<T>(url, config);
  }

  /**
   * Realiza una petición PATCH a la url especificada.
   * @template T Tipo de dato que se espera recibir en la respuesta.
   * @param {string} url URL a la que se realizará la petición.
   * @param {unknown} data Datos a enviar en el cuerpo de la petición.
   * @param {AxiosRequestConfig} [config] Configuración adicional de la petición.
   * @returns {Promise<AxiosResponse<T>>} Promesa que se resuelve con la respuesta completa.
   */
  static async patch<T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return await HttpClient.obtenerInstanciaAxios().patch<T>(url, data, config);
  }
}
