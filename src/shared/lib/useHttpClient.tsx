import axios, { AxiosInstance, AxiosError } from "axios";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export class HttpClient {
  private static api: AxiosInstance;

  private static getAxiosInstance(): AxiosInstance {
    if (!HttpClient.api) {
      HttpClient.api = axios.create({
        baseURL: API_URL,
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      HttpClient.api.interceptors.response.use(
        (response) => response,
        (error: AxiosError) => {
          if (error.response?.status === 401) {
            if (typeof window !== "undefined") {
              window.location.href = "/auth?expired=1";
            }
          }
          return Promise.reject(error);
        }
      );
    }
    return HttpClient.api;
  }

  static async get<T>(url: string, config?: any): Promise<T> {
    const response = await HttpClient.getAxiosInstance().get<T>(url, config);
    return response.data;
  }

  static async post<T>(url: string, data?: unknown, config?: any): Promise<T> {
    const response = await HttpClient.getAxiosInstance().post<T>(
      url,
      data || {},
      config
    );
    return response.data;
  }

  static async put<T>(url: string, data: unknown, config?: any): Promise<T> {
    const response = await HttpClient.getAxiosInstance().put<T>(
      url,
      data,
      config
    );
    return response.data;
  }

  static async delete<T>(url: string, config?: any): Promise<T> {
    const response = await HttpClient.getAxiosInstance().delete<T>(url, config);
    return response.data;
  }

  static async patch<T>(url: string, data: unknown, config?: any): Promise<T> {
    const response = await HttpClient.getAxiosInstance().patch<T>(
      url,
      data,
      config
    );
    return response.data;
  }
}
