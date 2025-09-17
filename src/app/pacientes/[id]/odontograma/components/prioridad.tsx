"use client";

type Props = {
  priority: "Alta" | "Media" | "Baja";
};

export default function Prioridad({ priority }: Props) {
  const colors =
    priority === "Alta"
      ? "bg-red-100 text-red-600"
      : priority === "Media"
      ? "bg-yellow-100 text-yellow-600"
      : "bg-green-100 text-green-600";

  return (
    <span className={`px-2 py-1 rounded-lg text-xs font-medium ${colors}`}>
      {priority}
    </span>
  );
}
