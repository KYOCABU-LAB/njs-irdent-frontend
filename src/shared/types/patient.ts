export type Patient = {
  id: string;
  fullName: string;
  dni?: string;
  birthdate?: string; // ISO (YYYY-MM-DD) o Date.toString()
  avatarUrl?: string; // opcional: /img.png
};
