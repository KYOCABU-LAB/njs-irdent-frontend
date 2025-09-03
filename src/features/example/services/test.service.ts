import { HttpClient } from "@/shared/lib/useHttpClient";

export const getTest = async () => {
  try {
    const data = await HttpClient.get<string>("/");
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
