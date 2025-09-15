import axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from "axios";
import { getSession, signOut } from "next-auth/react";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

interface ExtendedAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

export class HttpClient {
  private static instanciaApi: AxiosInstance;
  private static estaRefrescando = false;
  private static colaFallidas: Array<{
    resolve: (value?: unknown) => void;
    reject: (reason?: any) => void;
  }> = [];

  /**
   * Procesa la cola de fallidas de las solicitudes
   * @param error Error de la solicitud
   * @param token Token de acceso
   */
  private static procesarCola(
    error: AxiosError | null,
    token: string | null = null
  ): void {
    HttpClient.colaFallidas.forEach((prom) => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve(token);
      }
    });
    HttpClient.colaFallidas = [];
  }
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
          }
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
      /**
       * Interceptador de respuestas
       */
      HttpClient.instanciaApi.interceptors.response.use(
        (response) => response,
        async (error: AxiosError) => {
          // solicitud original
          const solicitudOriginal = error.config as ExtendedAxiosRequestConfig;

          // si el error es de autenticación y la solicitud original no ha sido reintentada
          if (
            error.response?.status === 401 &&
            solicitudOriginal &&
            !solicitudOriginal._retry
          ) {
            // si hay otra solicitud de refresco en curso, se agrega a la cola
            if (HttpClient.estaRefrescando) {
              return new Promise((resolve, reject) => {
                HttpClient.colaFallidas.push({ resolve, reject });
              })
                .then((token) => {
                  (solicitudOriginal.headers ??=
                    {}).Authorization = `Bearer ${token}`;
                  return HttpClient.instanciaApi(solicitudOriginal);
                })
                .catch((err) => {
                  return Promise.reject(err);
                });
            }
            solicitudOriginal._retry = true;
            HttpClient.estaRefrescando = true;

            // si no, se intenta refrescar el token
            return new Promise(async (resolve, reject) => {
              try {
                const session = await getSession(); //obtiene la sesion

                // si el token de refresco existe
                if (session?.refreshToken) {
                  const respuesta = await axios.post(
                    `${API_URL}/auth/refresh`,
                    {
                      refresh_token: session.refreshToken,
                    }
                  );
                  const { access_token, refresh_token } = respuesta.data;

                  // se actualiza los headers con el nuevo token
                  (solicitudOriginal.headers ??=
                    {}).Authorization = `Bearer ${access_token}`;
                  //
                  HttpClient.procesarCola(null, access_token);
                  //
                  resolve(HttpClient.instanciaApi(solicitudOriginal));
                } else {
                  HttpClient.procesarCola(error, null);
                  signOut({ callbackUrl: "/auth/signin" });
                  reject(error);
                }
              } catch (errorRefresco) {
                HttpClient.procesarCola(errorRefresco as AxiosError, null);
                signOut({ callbackUrl: "/auth/signin" });
                reject(errorRefresco);
              } finally {
                HttpClient.estaRefrescando = false;
              }
            });
          } else if (error.response?.status === 401) {
            signOut({ callbackUrl: "/auth/signin" });
            return Promise.reject(error);
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
   * @returns {Promise<T>} Promesa que se resuelve con los datos de la respuesta.
   */
  static async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const respuesta = await HttpClient.obtenerInstanciaAxios().get<T>(
      url,
      config
    );
    return respuesta.data;
  }

  /**
   * Realiza una petición POST a la url especificada.
   * @template T Tipo de dato que se espera recibir en la respuesta.
   * @param {string} url URL a la que se realizará la petición.
   * @param {unknown} [data] Datos a enviar en el cuerpoo de la petición.
   * @param {AxiosRequestConfig} [config] Configuración adicional de la petición.
   * @returns {Promise<T>} Promesa que se resuelve con los datos de la respuesta.
   */
  static async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const respuesta = await HttpClient.obtenerInstanciaAxios().post<T>(
      url,
      data || {},
      config
    );
    return respuesta.data;
  }

  /**
   * Realiza una petición PUT a la url especificada.
   * @template T Tipo de dato que se espera recibir en la respuesta.
   * @param {string} url URL a la que se realizará la petición.
   * @param {unknown} data Datos a enviar en el cuerpopo de la petición.
   * @param {AxiosRequestConfig} [config] Configuración adicional de la petición.
   * @returns {Promise<T>} Promesa que se resuelve con los datos de la respuesta.
   */
  static async put<T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const respuesta = await HttpClient.obtenerInstanciaAxios().put<T>(
      url,
      data,
      config
    );
    return respuesta.data;
  }

  /**
   * Realiza una petición DELETE a la url especificada.
   * @template T Tipo de dato que se espera recibir en la respuesta.
   * @param {string} url URL a la que se realizará la petición.
   * @param {AxiosRequestConfig} [config] Configuración adicional de la petición.
   * @returns {Promise<T>} Promesa que se resuelve con los datos de la respuesta.
   */
  static async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const respuesta = await HttpClient.obtenerInstanciaAxios().delete<T>(
      url,
      config
    );
    return respuesta.data;
  }

  /**
   * Realiza una petición PATCH a la url especificada.
   * @template T Tipo de dato que se espera recibir en la respuesta.
   * @param {string} url URL a la que se realizará la petición.
   * @param {unknown} data Datos a enviar en el cuerpopo de la petición.
   * @param {AxiosRequestConfig} [config] Configuración adicional de la petición.
   * @returns {Promise<T>} Promesa que se resuelve con los datos de la respuesta.
   */
  static async patch<T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const respuesta = await HttpClient.obtenerInstanciaAxios().patch<T>(
      url,
      data,
      config
    );
    return respuesta.data;
  }
}
