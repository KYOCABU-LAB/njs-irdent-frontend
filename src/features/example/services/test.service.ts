import { HttpClient } from "@/shared/lib/useHttpClient";
import { User } from "../hooks/useTestHook";

export const getTest = async () => {
  try {
    const data = await HttpClient.get<User>("/");
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
